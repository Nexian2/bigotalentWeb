<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiswaController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// 1. Rute Halaman Depan (Welcome Page)
Route::get('/', function () {
    return view('welcome');
});

// 2. Rute "Penyortir" Pintar (Otomatis arahkan sesuai Role sesaat setelah Login)
Route::get('/dashboard', function () {
    if (Auth::user()->role === 'admin') {
        return redirect()->route('admin.dashboard');
    }
    return redirect()->route('siswa.dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// 3. JALUR KHUSUS ADMIN (Dijaga oleh Middleware Role:admin)
Route::middleware(['auth', 'role:admin'])->group(function () {
    // Halaman Utama Admin
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');

    // Halaman Menu Kelola
    Route::get('/admin/kelola-lomba', [AdminController::class, 'kelolaLomba'])->name('admin.lomba');
    Route::get('/admin/kelola-siswa', [AdminController::class, 'kelolaSiswa'])->name('admin.siswa');
    Route::get('/admin/kelola-status', [AdminController::class, 'kelolaStatus'])->name('admin.status');

    // CRUD Lomba
    Route::post('/admin/lomba', [AdminController::class, 'storeLomba'])->name('admin.lomba.store');
    Route::get('/admin/lomba/{id}/edit', [AdminController::class, 'editLomba'])->name('admin.lomba.edit');
    Route::put('/admin/lomba/{id}', [AdminController::class, 'updateLomba'])->name('admin.lomba.update');
    Route::delete('/admin/lomba/{id}', [AdminController::class, 'destroyLomba'])->name('admin.lomba.destroy');

    // CRUD Siswa
    Route::post('/admin/siswa', [AdminController::class, 'storeSiswa'])->name('admin.siswa.store');
    Route::get('/admin/siswa/{id}/edit', [AdminController::class, 'editSiswa'])->name('admin.siswa.edit');
    Route::put('/admin/siswa/{id}', [AdminController::class, 'updateSiswa'])->name('admin.siswa.update');
    Route::delete('/admin/siswa/{id}', [AdminController::class, 'destroySiswa'])->name('admin.siswa.destroy');

    // Update Status Pendaftaran
    Route::post('/admin/pendaftaran/{id}/status', [AdminController::class, 'updateStatus'])->name('admin.status.update');
});

// 4. JALUR KHUSUS SISWA (Dijaga oleh Middleware Role:siswa)
Route::middleware(['auth', 'role:siswa'])->group(function () {
    // Halaman Dashboard Siswa
    Route::get('/siswa/dashboard', [SiswaController::class, 'index'])->name('siswa.dashboard');

    // Proses Daftar Lomba
    Route::post('/siswa/daftar', [SiswaController::class, 'daftarLomba'])->name('siswa.daftar');
});

// Rute untuk mengedit Profil (Bawaan Breeze)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
