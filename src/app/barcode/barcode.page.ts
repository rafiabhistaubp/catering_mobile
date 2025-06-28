import { Component, ViewChild, ElementRef } from '@angular/core';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';

@Component({
  standalone: false,
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage {
  @ViewChild('video', { static: false }) video!: ElementRef<HTMLVideoElement>;
  barcodeResult: string | null = null;
  codeReader = new BrowserMultiFormatReader();
  scannerControls: IScannerControls | null = null;

  constructor() {}

  async startScanner() {
    try {
      const videoElement = this.video.nativeElement;

      const devices = await BrowserMultiFormatReader.listVideoInputDevices();
      const selectedDeviceId = devices[0]?.deviceId;

      if (!selectedDeviceId) {
        alert("Kamera tidak ditemukan.");
        return;
      }

      // Hentikan scanner sebelumnya jika ada
      if (this.scannerControls) {
        this.scannerControls.stop();
        this.scannerControls = null;
      }

      // Memulai pemindaian
      this.scannerControls = await this.codeReader.decodeFromVideoDevice(
        selectedDeviceId,
        videoElement,
        (result, error, controls) => {
          if (result) {
            this.barcodeResult = result.getText();
            controls.stop(); // stop scanning setelah barcode ditemukan
            this.scannerControls = null;
          }
        }
      );

    } catch (error) {
      console.error('Gagal memulai scanner:', error);
    }
  }
}
