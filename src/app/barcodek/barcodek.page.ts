import { Component, OnInit, OnDestroy } from '@angular/core';
import * as QRCode from 'qrcode';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: false,
  selector: 'app-barcodek',
  templateUrl: './barcodek.page.html',
  styleUrls: ['./barcodek.page.scss'],
})
export class BarcodekPage implements OnInit, OnDestroy {

  qrValue: string = '';  // Data yang akan dimasukkan ke dalam QR Code
  generatedQRCode: string = '';  // URL untuk QR Code yang dihasilkan
  token: string = '';  // Token yang digunakan untuk qr_tokens
  qrInterval: any;  // Interval untuk pembaruan QR Code
  countdownTime: number = 15;  // Waktu hitungan mundur dalam detik
  countdownInterval: any;  // Interval untuk hitungan mundur

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.startQRCodeGenerator();  // Mulai proses pembaruan QR Code dan hitungan mundur
  }

  ngOnDestroy() {
    // Hapus interval saat komponen dihancurkan
    if (this.qrInterval) {
      clearInterval(this.qrInterval);  
    }
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);  
    }
  }

  // Fungsi untuk memulai generator QR Code dan hitungan mundur
  startQRCodeGenerator() {
    this.generateQRCode();  // Hasilkan QR Code pertama kali

    // Set interval untuk memperbarui QR Code setiap 15 detik
    this.qrInterval = setInterval(() => {
      this.generateQRCode();  // Hasilkan QR Code setiap 15 detik
    }, 15000);  // 15000 ms = 15 detik
  }

  // Fungsi untuk menghasilkan QR Code baru
  generateQRCode() {
    const user_id = '123';  // Example user_id from a login mechanism (Not from localStorage)
    const token = 'xyz_token';  // Example token from a login mechanism (Not from localStorage)

    if (!user_id || !token) {
      console.error('User ID or Token is not available.');
      return;
    }

    const status = 'berhasil';  // Scan status
    const alasan = 'No issue';  // Scan reason

    // Data to encode into the QR Code for scan logs and QR tokens
    const scanData = {
      user_id: user_id,
      status: status,
      token: token,  // Using token from the app
      waktu_scan: new Date().toISOString()  // Timestamp for the scan
    };

    // Convert data into JSON format
    this.qrValue = JSON.stringify(scanData);

    // Generate QR Code
    QRCode.toDataURL(this.qrValue, { width: 256, margin: 4 }, (err: any, url: string) => {
      if (err) {
        console.error('Error generating QR code:', err);
      } else {
        this.generatedQRCode = url;  // Store the QR Code URL
        console.log('QR Code generated:', this.generatedQRCode);

        // After QR Code is generated, start countdown timer
        this.startCountdown();
      }
    });
  }

  // Fungsi untuk memulai countdown setelah QR Code dihasilkan
  startCountdown() {
    this.countdownTime = 15;  // Reset waktu hitung mundur ke 15 detik

    // Jika countdownInterval sudah ada, hentikan sebelum memulai yang baru
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    // Mulai interval countdown
    this.countdownInterval = setInterval(() => {
      if (this.countdownTime > 0) {
        this.countdownTime--;  // Kurangi waktu hitungan mundur
      } else {
        this.countdownTime = 15;  // Reset waktu hitung mundur ke 15 detik
        this.generateQRCode();  // Hasilkan QR Code baru setelah countdown selesai
      }
    }, 1000);  // Update setiap 1 detik
  }

  // Fungsi untuk mengirimkan data pemindaian QR ke backend
  sendScanData(barcodeValue: string) {
    const apiUrl = 'https://qrdins.my.id/api/scan'; // Your backend API endpoint

    // The user_id and token should now be provided directly, not from localStorage
    const user_id = '123';  // Example user_id from the app login
    const token = 'xyz_token';  // Example token from the app login

    if (!user_id || !token) {
      console.error('User ID or Token is not available');
      return;
    }

    const payload = {
      barcode_value: barcodeValue,  // QR code value detected
      status: 'berhasil',  // Scan status
      user_id: user_id,  // Adding user_id
    };

    // Sending data using HttpClient with Authorization header
    this.http.post(apiUrl, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Include the token in the Authorization header
      },
    })
    .subscribe(
      (response: any) => {
        console.log('Scan data saved successfully:', response);
      },
      (error) => {
        console.error('Error saving data:', error);
        alert("Error while sending data, please try again.");
      }
    );
  }
}
