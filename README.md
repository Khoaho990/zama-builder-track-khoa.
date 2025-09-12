# Zama Builder Track - Private Data App

## Mô tả
DApp demo sử dụng Hardhat để triển khai hợp đồng thông minh xử lý dữ liệu (mô phỏng FHEVM).

## Cách chạy
1. Chạy node: `npx hardhat node`
2. Deploy hợp đồng: `npx hardhat run scripts/deploy.cjs --network localhost`
3. Mở `frontend/index.html` trong trình duyệt

## Địa chỉ hợp đồng
`0x5FbDB2315678afecb367f032d93F642f64180aa3`

## Ghi chú
- FHE integration đang được mô phỏng do SDK chưa sẵn sàng.
- Dự án sử dụng Hardhat 2.26.0 với CommonJS để đảm bảo tương thích.
