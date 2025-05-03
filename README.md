
# eWallet MVP – Learning Project

This project is a simplified version of an eWallet application built for educational purposes. The aim is to understand digital wallet architecture, key modules, and practical implementation using a minimal but functional feature set.



# MVP Features with Descriptions

## User & Account Management
Handles basic user identity and access:
- **User Registration**: Allow users to register using mobile number, email, and password. OTP can be simulated.
- **Login/Logout**: Secure authentication using username and password.
- **Profile Management**: Users can update their email, phone number, and password.



## Wallet Management
Manage virtual wallet balance and security:
- **View Wallet Balance**: Users can see their current wallet balance on dashboard.
- **Wallet Top-up**: Add funds to wallet via simulated methods (e.g., mock bank transfer or test card).
- **Lock/Unlock Wallet**: Temporarily freeze or enable wallet usage with a toggle (useful for simulating loss or security issues).



## Fund Transfer
Enable user-to-user fund movement:
- **P2P Transfer**: Send money to another user using phone number or wallet ID.
- **Transaction Notes**: Allow optional message or description with each transfer.
- **Wallet-to-Bank Transfer**: Simulate sending funds from wallet to external bank (mocked logic with confirmation step).



## Payments
Simulate merchant and bill payments:
- **Scan & Pay**: Simulate QR scan with text input or static QR code image to send payments.
- **Split Bills**: Allow simple division of a bill among selected users with equal or manual amounts.
- **Payment Status**: Show real-time success/failure with mock notification or alert.



## Transaction History
Track and manage past financial activity:
- **Transaction List**: Show all sent, received, and top-up transactions.
- **Filters**: Allow filtering by type (e.g., received, sent) or date.
- **Export History**: Enable export of transactions to CSV format for download.



## Rewards (Optional)
Offer basic gamification for engagement:
- **Loyalty Points**: Award points for each transaction.
- **Promo Code Simulation**: Apply promo code for cashback or bonus points.



## Basic Security
Ensure essential safety mechanisms:
- **Transaction PIN**: Users must enter a secure 6-digit PIN before sending funds.
- **Session Timeout**: Auto-logout after a set time of inactivity to protect access.



## Tech Stack (Suggested for Learning)

- **Frontend**: React.js
- **Backend**: Node.js (Express)
- **Database**: PostgreSQL or MySQL
- **Authentication**: JWT-based sessions
- **Dev Tools**: Postman, Docker, GitHub



## 📁 Project Structure (Sample)

```

```

## Contact

This project is for personal learning. For collaboration or suggestions, reach out to **rnr379@gmail.com**
