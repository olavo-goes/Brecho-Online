# 🛍️ Cyber Brechó

Projeto de um **brechó digital** desenvolvido em **React**, com sistema de carrinho, compra individual de produtos e histórico de compras.  
A aplicação consome dados da **Fake Store API** e simula uma experiência real de e-commerce.

---

## 📸 Preview
> Interface moderna, leve e responsiva, com foco em usabilidade e organização visual.
> ### Login
![Login](<img width="1365" height="592" alt="Captura de tela 2026-01-29 105027" src="https://github.com/user-attachments/assets/1ab89596-055d-421b-a0fb-34b387db1c2f" />
)

### Dashboard
![Dashboard](<img width="1365" height="593" alt="Captura de tela 2026-01-29 105047" src="https://github.com/user-attachments/assets/9b77e123-f99f-4c5b-a0da-0d7fd21f212b" />
)

### Carrinho
![Carrinho](<img width="1365" height="594" alt="Captura de tela 2026-01-29 105144" src="https://github.com/user-attachments/assets/6d4423e6-299a-4415-bcc0-a82dac9d8592" />
)

---

## 🚀 Funcionalidades

- ✅ Login simulado
- 🏠 Dashboard com listagem de produtos
- 🛒 Carrinho de compras
- 💳 Compra de **um produto por vez**
- 🧾 Histórico de compras
- ❌ Remoção de itens do carrinho
- 📱 Layout responsivo
- 🎨 Estilização customizada em CSS

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS puro**
- **Context API**
- **Fake Store API**

---

## 📂 Estrutura do Projeto

```bash
src/
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
│
├── context/
│   ├── CartContext.jsx
│   └── PurchaseContext.jsx
│
├── Pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Carrinho.jsx
│   └── Historico.jsx
│
├── App.jsx
├── main.jsx
└── index.css
