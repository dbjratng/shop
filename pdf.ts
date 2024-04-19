<template>
  <div>
    <h1>SHOP!</h1>
    <button @click="generatePDF">Generate PDF</button>
    <div id="printable-area">
      <h2>Invoice</h2>
      <div v-for="(order, index) in orders" :key="index">
        <p>{{ order.name }}: ${{ order.price }}</p>
      </div>
      <p>Total: ${{ totalPrice }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';cd existing_repo

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default defineComponent({
  data() {
    return {
      orders: [
        { name: 'produit 1', price: 10 },
        { name: 'produit 2', price: 20 },
        { name: 'produit 3', price: 15 },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.orders.reduce((acc, order) => acc + order.price, 0);
    },
  },
  methods: {
    generatePDF() {
      const printableArea = document.getElementById('printable-area');

      html2canvas(printableArea).then((canvas) => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = canvas.width;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        const startY = pdfHeight - imgHeight - 10;
        const margin = 10;
        let currentY = startY;

        pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 0, currentY, pdfWidth, imgHeight);

        pdf.setFontSize(14);
        pdf.text('Invoice', margin, currentY - 20);

        pdf.setFontSize(12);
        this.orders.forEach((order, index) => {
          pdf.text(`${order.name}: $${order.price}`, margin, currentY - 40 - (index * 10));
        });

        pdf.text(`Total: $${this.totalPrice}`, margin, currentY - 40 - (this.orders.length * 10));

        pdf.save('design_and_invoice.pdf');
      });
    },
  },
});
</script>
