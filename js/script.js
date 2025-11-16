const summary = {
  totalProducts: 120,
  totalSales: 85,
  totalRevenue: 12500000
};

const products = [
  { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
  { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
  { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

function formatRupiah(number) {
  return (
    "Rp " +
    number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  );
}

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("login-form");

  if (form) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorBox = document.getElementById("login-error");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (email === "" || password === "") {
        errorBox.textContent = "Email dan password (NIM) tidak boleh kosong.";
        alert("Login gagal: email dan password wajib diisi.");
        return;
      }

      if (password !== "24090001") {
        errorBox.textContent = "Password salah. Gunakan NIM pembuat.";
        alert("Login gagal: password salah.");
        passwordInput.value = ""; 
        return;
      }

      errorBox.textContent = "";
      alert("Login berhasil!");
      window.location.href = "dashboard.html";
    });
  }

  const totalProductsEl = document.getElementById("total-products");
  const totalSalesEl = document.getElementById("total-sales");
  const totalRevenueEl = document.getElementById("total-revenue");
  const btnToProducts = document.getElementById("btn-to-products");

  if (totalProductsEl && totalSalesEl && totalRevenueEl) {
    totalProductsEl.textContent = summary.totalProducts;
    totalSalesEl.textContent = summary.totalSales;
    totalRevenueEl.textContent = formatRupiah(summary.totalRevenue);

    if (btnToProducts) {
      btnToProducts.addEventListener("click", function () {
        window.location.href = "products.html";
      });
    }
  }


  const productsTableBody = document.getElementById("products-table-body");

  if (productsTableBody) {
    renderProductsTable(productsTableBody);
  }
});

function renderProductsTable(tbody) {
  tbody.innerHTML = "";

  products.forEach((product, index) => {
    const tr = document.createElement("tr");

    const tdNo = document.createElement("td");
    tdNo.textContent = index + 1;

    const tdName = document.createElement("td");
    tdName.textContent = product.name;

    const tdPrice = document.createElement("td");
    tdPrice.textContent = product.price;

    const tdStock = document.createElement("td");
    tdStock.textContent = product.stock;

    const tdAction = document.createElement("td");

    const iconEdit = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25z"
    stroke="black" stroke-width="2" fill="white"/>
    <path d="M20.7 7.04c.39-.39.39-1.02 0-1.41L18.36 3.3
    c-.39-.39-1.02-.39-1.41 0L15.1 5.13l3.75 3.75 1.85-1.84z"
    stroke="black" stroke-width="2" fill="white"/>
    </svg>
    `;

    const iconDelete = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18" stroke="black" stroke-width="2"/>
    <path d="M8 6V4h8v2" stroke="black" stroke-width="2"/>
    <path d="M6 6l1 14h10l1-14" stroke="black" stroke-width="2"/>
    <path d="M10 11v6" stroke="black" stroke-width="2"/>
    <path d="M14 11v6" stroke="black" stroke-width="2"/>
    </svg>
    `;

   const btnEdit = document.createElement("button");
   btnEdit.className = "action-btn edit";
   btnEdit.innerHTML = iconEdit;   
   btnEdit.title = "Edit";
   btnEdit.addEventListener("click", () => {
   alert("Edit produk: " + product.name);
   });

   const btnDelete = document.createElement("button");
   btnDelete.className = "action-btn delete";
   btnDelete.innerHTML = iconDelete; 
   btnDelete.title = "Delete";
   btnDelete.addEventListener("click", () => {
    if (confirm("Yakin hapus produk ini?")) {
      tr.remove();
    }
  });


    tdAction.appendChild(btnEdit);
    tdAction.appendChild(btnDelete);

    tr.appendChild(tdNo);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdStock);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);
  });
}
