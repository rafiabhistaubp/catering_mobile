import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QrscannerService {

  private apiUrl = 'https://qrdins.my.id/api/scan';  // Endpoint for sending scanned QR data to the backend

  constructor(private http: HttpClient) {}

  // Function to send scanned QR data to the backend
  sendScanData(barcodeValue: string, status: string = 'berhasil', alasan: string = 'No issue'): Observable<any> {
    // Retrieve user_id and token from localStorage
    const user_id = localStorage.getItem('user_id');
    const token = localStorage.getItem('authToken');

    // Ensure user_id and token are available
    if (!user_id || !token) {
      console.error('User ID or Token not found in localStorage');
      return new Observable(); // Return an empty Observable if user_id or token is not found
    }

    // Prepare the payload to send to the backend
    const payload = {
      user_id: user_id,  // Include the user_id
      barcode_value: barcodeValue,  // The scanned QR code value
      status: status,  // Status of the scan (e.g., berhasil, gagal)
      alasan: alasan,  // Reason for scanning (optional)
    };

    // Set the headers with the Authorization token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',  // Ensure Content-Type is JSON
    });

    // Send the POST request to the backend with the payload and headers
    return this.http.post(this.apiUrl, payload, { headers });
  }
}
