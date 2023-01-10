# Chức năng chính:
    - Phân quyền Role(admin/user/customer)
    - CRUD
    - Search
    - Thống kê

# Phân tích hệ thống
    - Frontend
    - Backend:
        - Admin
            - Role: admin
            - Đăng ký tài khoản
            - Đăng nhập
            - Quản lý User
                - CRUD user
            - Quản lý Product, Cart
                - CRUD Cart
                - CRUD Product
            - Xuất báo cáo
        - User
            - Role: user
            - Đăng ký tài khoản
            - Đăng nhập
            - Tài khoản Product
                - CRUD Product
            - Xuất báo cáo
        - Customer
            - Role: customer
            - Đăng kí tài khoản
            - Đăng nhập
            - Quản lý Cart
                - CRUD Cart
    

# Một vài activity diagram: [https://drive.google.com/file/d/1FUkt3A7RLthxGKJB45IxJTMVyQNDEImF/view?usp=sharing]

# Biểu đồ UseCase: [https://drive.google.com/file/d/1S3lSbVFV3tSWNchb-L1eJZJooSWxkpJr/view?usp=share_link]

# Một vài Sequence diagram: [https://drive.google.com/file/d/1btU_AjTxOd4bsN1ievqenSaaq3WXs-zV/view?usp=sharing]

# Thiết kế database: [https://dbdiagram.io/d/63bcd14a6afaa541e5d16255]
    - Role
        - ID_Role int auto_increament
        - Name_Role varchar 255
    - User
        - ID_User int auto_increament
        - Name_User varchar 255
        - Email varchar 255 unique
        - Password varchar 255
        - Phone varchar 20 unique
        - Address varchar 255
        - ID_Role int FK Role
    - Category
        - ID_Category int auto_increament
        - Name_Category varchar 100
    - Product
        - ID_Product int auto_increament
        - ID_Category int FK Category
        - Title varchar 255
        - Price varchar 20
        - Description varchar 255
        - Created_At datetime
        - Updated_At datetime
    - Cart
        - ID_Cart int auto_increament
        - ID_User FK User
        - ID_Product FK 
        - Create_Cart_At datetime
        - Status int
