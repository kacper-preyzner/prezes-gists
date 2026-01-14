<?php

namespace Tests\Feature;

use App\Actions\CreateAlbumOfGists;
use App\Data\CreateAlbumData;
use App\Data\CreateGistData;
use App\Models\Album;
use App\Models\Gist;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CreateAlbumOfGistsTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_creates_an_album(): void
    {
        $action = new CreateAlbumOfGists;

        $data = new CreateAlbumData(gists: [
            new CreateGistData(fileName: 'test.php', content: '<?php echo "Hello";'),
        ]);

        $album = $action->handle($data);

        $this->assertInstanceOf(Album::class, $album);
        $this->assertDatabaseHas('albums', ['id' => $album->id]);
    }

    public function test_it_creates_gists_with_correct_data(): void
    {
        $action = new CreateAlbumOfGists;

        $data = new CreateAlbumData(gists: [
            new CreateGistData(fileName: 'hello.py', content: 'print("Hello World")'),
        ]);

        $album = $action->handle($data);

        $this->assertDatabaseHas('gists', [
            'file_name' => 'hello.py',
            'content' => 'print("Hello World")',
            'album_id' => $album->id,
        ]);
    }

    public function test_it_creates_multiple_gists(): void
    {
        $action = new CreateAlbumOfGists;

        $data = new CreateAlbumData(gists: [
            new CreateGistData(fileName: 'index.js', content: 'console.log("one");'),
            new CreateGistData(fileName: 'app.js', content: 'console.log("two");'),
            new CreateGistData(fileName: 'utils.js', content: 'console.log("three");'),
        ]);

        $album = $action->handle($data);

        $this->assertCount(3, Gist::where('album_id', $album->id)->get());
        $this->assertDatabaseHas('gists', ['file_name' => 'index.js', 'album_id' => $album->id]);
        $this->assertDatabaseHas('gists', ['file_name' => 'app.js', 'album_id' => $album->id]);
        $this->assertDatabaseHas('gists', ['file_name' => 'utils.js', 'album_id' => $album->id]);
    }

    public function test_gists_are_associated_with_album(): void
    {
        $action = new CreateAlbumOfGists;

        $data = new CreateAlbumData(gists: [
            new CreateGistData(fileName: 'main.go', content: 'package main'),
            new CreateGistData(fileName: 'helper.go', content: 'package helper'),
        ]);

        $album = $action->handle($data);
        $album->refresh();

        $this->assertCount(2, $album->gists);
        $this->assertTrue($album->gists->contains('file_name', 'main.go'));
        $this->assertTrue($album->gists->contains('file_name', 'helper.go'));
    }

    public function test_it_handles_empty_gists_array(): void
    {
        $action = new CreateAlbumOfGists;

        $data = new CreateAlbumData(gists: []);

        $album = $action->handle($data);

        $this->assertInstanceOf(Album::class, $album);
        $this->assertCount(0, $album->gists);
    }
}
