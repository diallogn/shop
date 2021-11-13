8. Route product detail page
   1. Make product card linkable
   2. Create product/[slug] route
   3. Find product based on slug
9. Create product detail page
   1. Create 3 columns
   2. Show image on the first column
   3. Show product info in second column
   4. Show add to cart action on third column
   5. Add styles
10. Add MaterialUI Theme
    1. Create theme
    2. Use theme provider
    3. add h1 and h2 styles
    4. set Theme colors
11. Create Application context
    1. define context and reducer
    2. set dark mode flag
    3. create store provider
    4. use it no layout
12. connect To MongoDB
    1. install Mongodb
    2. install mongoose
    3. define connect and disconnect
    4. use it in the api
13. Create products API
    1. create product model
    2. seed simple data
    3. create api/products/index.js
    4. create product api
14. Fetch Products from API
    1. use getServerSideProps()
    2. get product from db
    3. return data as props
    4. use it in the product screen too
15. Implement add to cart
    1. define cart in context
    2. dispatch add to cart context
    3. set click event handler for button
16. Create Cart Screen
    1. create cart.js
    2. redirect to cart screen
    3. use dynamic from nextjs
    4. list items in cart items
17. Convert cart screen to dynamic component
    1. Use next/dynamic
    2. wrap cart in dynamic without ssr
18. Update Remove Items In Cart
    1. Implement onChange for Select
    2. Show notification by notistack
    3. Implement delete button handler
19. Create Login Screen
    1. create form
    2. add email and password field
    3. add login button
    4. style form
20. Create Sample Users
    1. create user model
    2. add sample user in seed api
21. Build simple API
    1. use jsonwebtoken to sign token
    2. implement login api
22. Complete Login Screen
    1. handle form submission
    2. add userInfo to context
    3. save userInfo in cookies
    4. show user name in navbar using menu
23. Create Register Page
    1. create form
    2. implement register api
    3. redirect user to redirect page
24. Login and Register Form Validation
    1. install react-hook-form
    2. change input to controller
    3. use notistack to show errors
25. Create Shipping Page
    1. create form
    2. add address fields
    3. save in Context and Cookies
26. Create Payment Page
    1. create form
    2. add radio button
    3. save method in context
27. Create Place Order Page
    1. display order info
    2. show order summary
    3. add place order button
28. Implement Place Order Action
    1. create click handler
    2. send ajax request
    3. clear cart
    4. redirect to order screen
    5. reate backend api
29. Create Order Details Page
    1. create api to order info
    2. create payment, shipping and items
    3. create order summary
30. Display Orders History
    1. create orders api
    2. show orders in profile screen
