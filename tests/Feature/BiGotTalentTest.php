<?php

namespace Tests\Feature;

use App\Models\Lomba;
use App\Models\Pendaftaran;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BiGotTalentTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_admin_redirected_to_admin_dashboard_after_login(): void
    {
        $admin = User::where('role', 'admin')->first();

        $response = $this->actingAs($admin)->get('/dashboard');
        $response->assertRedirect(route('admin.dashboard'));
    }

    public function test_siswa_redirected_to_siswa_dashboard_after_login(): void
    {
        $siswa = User::where('role', 'siswa')->first();

        $response = $this->actingAs($siswa)->get('/dashboard');
        $response->assertRedirect(route('siswa.dashboard'));
    }

    public function test_siswa_cannot_access_admin_panel(): void
    {
        $siswa = User::where('role', 'siswa')->first();

        $response = $this->actingAs($siswa)->get(route('admin.dashboard'));
        $response->assertStatus(403);
    }

    public function test_admin_can_create_edit_update_delete_lomba(): void
    {
        $admin = User::where('role', 'admin')->first();

        // Create
        $response = $this->actingAs($admin)->post(route('admin.lomba.store'), [
            'nama_lomba' => 'Stand Up Comedy',
            'deskripsi' => 'Lomba melawak tunggal.',
        ]);
        $response->assertRedirect();
        $this->assertDatabaseHas('lombas', ['nama_lomba' => 'Stand Up Comedy']);

        $lomba = Lomba::where('nama_lomba', 'Stand Up Comedy')->first();

        // Edit page
        $editResponse = $this->actingAs($admin)->get(route('admin.lomba.edit', $lomba->id));
        $editResponse->assertStatus(200);

        // Update
        $updateResponse = $this->actingAs($admin)->put(route('admin.lomba.update', $lomba->id), [
            'nama_lomba' => 'Stand Up Comedy Updated',
            'deskripsi' => 'Deskripsi update.',
        ]);
        $updateResponse->assertRedirect(route('admin.lomba'));
        $this->assertDatabaseHas('lombas', ['nama_lomba' => 'Stand Up Comedy Updated']);

        // Delete
        $deleteResponse = $this->actingAs($admin)->delete(route('admin.lomba.destroy', $lomba->id));
        $deleteResponse->assertRedirect();
        $this->assertDatabaseMissing('lombas', ['id' => $lomba->id]);
    }

    public function test_admin_can_create_edit_update_delete_siswa(): void
    {
        $admin = User::where('role', 'admin')->first();

        // Create
        $response = $this->actingAs($admin)->post(route('admin.siswa.store'), [
            'name' => 'Siti Nurhaliza',
            'email' => 'siti@sekolah.com',
            'password' => 'password123',
        ]);
        $response->assertRedirect();
        $this->assertDatabaseHas('users', ['email' => 'siti@sekolah.com', 'role' => 'siswa']);

        $siswa = User::where('email', 'siti@sekolah.com')->first();

        // Edit page
        $editResponse = $this->actingAs($admin)->get(route('admin.siswa.edit', $siswa->id));
        $editResponse->assertStatus(200);

        // Update
        $updateResponse = $this->actingAs($admin)->put(route('admin.siswa.update', $siswa->id), [
            'name' => 'Siti Updated',
            'email' => 'siti_updated@sekolah.com',
        ]);
        $updateResponse->assertRedirect(route('admin.siswa'));
        $this->assertDatabaseHas('users', ['email' => 'siti_updated@sekolah.com', 'name' => 'Siti Updated']);

        // Delete
        $deleteResponse = $this->actingAs($admin)->delete(route('admin.siswa.destroy', $siswa->id));
        $deleteResponse->assertRedirect();
        $this->assertDatabaseMissing('users', ['id' => $siswa->id]);
    }

    public function test_admin_can_update_status_pendaftaran(): void
    {
        $admin = User::where('role', 'admin')->first();
        $pendaftaran = Pendaftaran::first();

        $response = $this->actingAs($admin)->post(route('admin.status.update', $pendaftaran->id), [
            'status' => 'Final',
        ]);
        $response->assertRedirect();
        $this->assertDatabaseHas('pendaftarans', ['id' => $pendaftaran->id, 'status' => 'Final']);
    }

    public function test_siswa_can_register_lomba_and_prevent_duplicate(): void
    {
        $siswa = User::where('role', 'siswa')->first();
        $lomba2 = Lomba::where('nama_lomba', 'Dance Modern')->first();

        // Register
        $response = $this->actingAs($siswa)->post(route('siswa.daftar'), [
            'lomba_id' => $lomba2->id,
            'kelas' => 'XI RPL 2',
            'no_wa' => '08987654321',
        ]);
        $response->assertRedirect();
        $this->assertDatabaseHas('pendaftarans', [
            'user_id' => $siswa->id,
            'lomba_id' => $lomba2->id,
            'kelas' => 'XI RPL 2',
            'no_wa' => '08987654321',
            'status' => 'Dokumen dalam Tinjauan',
        ]);

        // Duplicate attempt
        $dupResponse = $this->actingAs($siswa)->post(route('siswa.daftar'), [
            'lomba_id' => $lomba2->id,
            'kelas' => 'XI RPL 2',
            'no_wa' => '08987654321',
        ]);
        $dupResponse->assertSessionHas('error');
    }
}
