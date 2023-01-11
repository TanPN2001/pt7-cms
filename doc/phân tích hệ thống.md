# Chức năng chính:

    - Phân quyền Role(admin/user/customer)
        - Admin: Cấp từng quyền employee
        - VD: Admin cấp quyền edit product[i] cho employee[j]
    - CRUD
    - Search
    - Thống kê

# Phân tích hệ thống

    - Frontend
    - Backend:
        - Admin
            - Role: admin
            - Đăng ký tài khoản: Admin không có quyền đăng kí tài khoản, sẽ được cấp riêng
            - Đăng nhập
            - Quản lý:
                - Cấp quyền cho employee
                - CRUD employee
            - Quản lý Product, Category
                - CRUD Category
                - CRUD Product
            - Quản lý kho:
                - Quản lý nhậ xuất kho
                - Xuất báo cáo
                - quản lý hàng hóa trong kho
        - Employee
            - Role: employee
            - Đăng ký tài khoản
            - Đăng nhập
            - Quản lý Product, Category
                - CRUD Category
                - CRUD Product
            - Quản lý kho:
                - Quản lý nhậ xuất kho
                - Xuất báo cáo
                - quản lý hàng hóa trong kho

# Một vài activity diagram: [https://drive.google.com/file/d/1FUkt3A7RLthxGKJB45IxJTMVyQNDEImF/view?usp=sharing]

# Biểu đồ UseCase: [https://docs.google.com/presentation/d/1PBBmwdSR1l9WkE9_D34qXD0aBeTpt5lISTeR7Ohd86Q/edit#slide=id.g4aadc09d44_0_130]  `Slide a Hùng`

# Một vài Sequence diagram: [https://drive.google.com/file/d/1btU_AjTxOd4bsN1ievqenSaaq3WXs-zV/view?usp=sharing]

# Thiết kế database: [https://drive.google.com/file/d/1RV2LejIX_rHbOxMcPqwpnOoMO9idQu0G/view?usp=sharing]

