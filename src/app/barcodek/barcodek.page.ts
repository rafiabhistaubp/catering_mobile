import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as QRCode from 'qrcode';

@Component({
  standalone: false,
  selector: 'app-barcodek',
  templateUrl: './barcodek.page.html',
  styleUrls: ['./barcodek.page.scss']
})
export class BarcodekPage implements OnInit, OnDestroy, AfterViewInit {
  barcodeValue: string = `QR-${new Date().getTime()}`;
  countdownTime: number = 15; // countdown in seconds
  subscription!: Subscription;

  user: { id: number, name: string } = { id: 123, name: 'John Doe' }; // Mendefinisikan objek user

  @ViewChild('qrCodeCanvas', { static: false }) qrCodeCanvas!: ElementRef;

  constructor() {}

  ngOnInit() {
    this.startCountdown(); // Start the countdown timer
  }

  ngAfterViewInit() {
    this.generateQRCode(); // Ensure canvas is available
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  generateQRCode() {
    if (this.qrCodeCanvas) {
      QRCode.toCanvas(this.qrCodeCanvas.nativeElement, this.barcodeValue, {
        width: 256,  // QR code size
        margin: 4   // QR code margin
      }, function (error: any) {
        if (error) {
          console.error(error);
        } else {
          console.log('QR code generated successfully!');
        }
      });
    }
  }

  // Function to start the countdown
  startCountdown() {
    setInterval(() => {
      if (this.countdownTime > 0) {
        this.countdownTime--;  // Decrease the countdown
      } else {
        // Reset the countdown and generate a new QR code when it reaches 0
        this.countdownTime = 15;  // Reset countdown to 15 seconds
        this.barcodeValue = `QR-${new Date().getTime()}`;
        this.generateQRCode(); // Update QR code
      }
    }, 1000); // Update countdown every second
  }

  // Function to manually generate a new barcode
  generateNewBarcode() {
    // Pastikan user.id ada sebelum digunakan
    this.barcodeValue = `User-ID-${this.user.id}-${new Date().getTime()}`;
    this.generateQRCode();
  }
}
