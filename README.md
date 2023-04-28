This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started / How to run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses MongoDB as a database so Make sure to have the MongoDB server running at ```mongodb://localhost:27017]```

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes

API routes can be accessed on [http://localhost:3000/api/blog](http://localhost:3000/api/blog) & [http://localhost:3000/api/users](http://localhost:3000/api/users).

[Postman Collection](https://www.postman.com/spacecraft-physicist-82771028/workspace/vinod/request/26477760-654f4ae0-8b00-46e7-959a-6348bc61d47d) of all the API route

![](https://raw.githubusercontent.com/vinod365/BlogApi/main/Postman_demo.gif)


## Key Features

![](https://raw.githubusercontent.com/vinod365/BlogApi/079e11a5c8e8d80f9b42a922e6b000043d30778d/Login_signup_demo.gif)

Here are some key features of this API:

- The login status of the user will be verified using JWT token with an expiry time
- All passwords are salted and hashed with bcrypt 
- The user can't create multiple accounts using the same email address
- User must have to provide 8-digit passwords.
- Simple GUI is also created to demonstrate the above points
----------------------

- Blog API strictly follows the REST Architecture
- CRUD operation can be performed

![](https://raw.githubusercontent.com/vinod365/BlogApi/main/MongoDB_demo.gif)