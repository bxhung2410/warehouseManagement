### Lấy dữ liệu từ server

<!-- get user data -->
<!-- http://localhost:8080/api/warehouses/users/:userId -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một object có dạng -->

getuserData = {
id: int,
name: string,
email: string,
roleId: enum('U', 'M', 'A'),
}

<!-- get equipmentData (equipment) -->
<!-- http://localhost:8080/api/warehouses/data/equipment/:warehouseId -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một mảng chứa các object có dạng -->

getEquipmentData = [
{
id: int,
name: string,
imgId: string,
description: string,
mode: boolean,
rise: boolean,
}
]

<!-- get hourlyData (sensors) -->
<!-- http://localhost:8080/api/warehouses/data/hourly/:warehouseId -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một mảng chứa các object có dạng -->

getHourlyData = [
{
amt: Math.floor(Math.random() * 10),
humid: float,
name: string, (hourly)
temper: float
}
]

<!-- get dailyData (sensors) -->
<!-- http://localhost:8080/api/warehouses/daily-data/:warehouseId -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một mảng chứa các object có dạng -->

getdailyData = [
{
amt: Math.floor(Math.random() * 10),
humid: float,
name: string, (daily)
temper: float
}
]

<!-- get monthlyData (sensors) -->
<!-- http://localhost:8080/api/warehouses/monthly-data/:warehouseId -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một mảng chứa các object có dạng -->

getMonthlyData = [
{
amt: Math.floor(Math.random() * 10),
humid: float,
name: string, (monthly)
temper: float
}
]

<!-- get controll equipment info (light, cooler, door) -->
<!-- http://localhost:8080/api/warehouses/equipment-control/:warehouseId -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một mảng chứa các object có dạng -->

getControlEquipmentInfo = [
{
id: int, id của thiết bị được hiển thị trên dashboard
name: string,
image: string,
proper1: string, còn lại hard code :)
para1: string,
proper2: string,
para2: string,
proper3: string,
para3: string,
proper4: string,
para4: string,
proper5: string,
para5: string,
}
]

<!-- get danh sách các thiết bị light, cooler, door -->
<!-- http://localhost:8080/api/warehouses/equipments/:warehouseId -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một mảng chứa các object có dạng -->

getEquipmentList = [
{
id: autoincrease, id của từng dòng dữ lỉu
name: string, tên
type: string, Light, Cooler hoặc Door
location: string,
state: boolean,
fInfo: string, thông tin thêm
date: dd/mm/yyyy, ngày mà thiết bị chào đời
time: HH:MM AM/PM" giờ mà thiết bị chào đời
}
]

### Quản lý danh sách thiết bị Light/Cooler/Door

<!-- add light/cooler/door -->
<!-- http://localhost:8080/api/warehouses/equipments/add/:warehouseId -->
<!-- method: POST -->
<!-- data được gửi trong body request có dạng -->

body = {
name: string,
category: enum('Door', 'Cooler', 'Light'),
locationId: int,
}

<!-- update an equipment as light, door, cooler -->
<!-- http://localhost:8080/api/warehouses/equipments/update/:warehouseId/:equipmentId -->
<!-- method: PUT -->
<!-- data được gửi trong body request có dạng -->

body = {
name: string,
locationId: int,
}

<!-- delete an equipment light/door/cooler -->
<!-- http://localhost:8080/api/warehouses/equipments/delete/:warehouseId/:equipmentId -->
<!-- DELETE -->
<!-- không có dữ liệu được gửi trong body hay params -->

### Quản lý danh sách sensor

<!-- add a new sensor -->
<!-- http://localhost:8080/api/warehouses/sensors/add/:warehouseId -->
<!-- method: POST -->
<!-- data được gửi trong body request có dạng -->

body = {
name: string,
locationId: int,
type: enum('L', 'D', 'G') // L = lightsensors, D = dht11s, G = gassensors
}

<!-- update a sensor -->
<!-- http://localhost:8080/api/warehouses/sensors/update/:warehouseId/:sensorId -->
<!-- method: PUT -->
<!-- data được gửi trong body request có dạng -->

body = {
name: string,
locationId: int,
}

<!-- delete an sensor as light sensor, gas sensor or dht11 -->
<!-- http://localhost:8080/api/warehouses/sensors/delete/:warehouseId/:sensorId -->
<!-- DELETE -->
<!-- không có dữ liệu được gửi trong body hay params -->

### Quản lý nhà kho (locations)

<!-- add a new warehouse -->
<!-- http::/localhost:8080/api/warehouses/warehouses/add -->
<!-- method: POST -->
<!-- data được gửi trong body request có dạng -->

body = {
name: string,
address: string,
}

<!-- update a warehouse -->
<!-- http::/localhost:8080/api/warehouses/warehouses/update/:warehouseId -->
<!-- method: PUT -->
<!-- data được gửi trong body request có dạng -->

body = {
name: string,
address: string,
}

<!-- delete a warehouse -->
<!-- http://localhost:8080/api/warehouses/warehouses/delete/:warehouseId -->
<!-- DELETE -->
<!-- không có dữ liệu được gửi trong body hay params -->

### Quản lý user

<!-- register a new account -->
<!-- http::/localhost:8080/api/warehouses/users/register -->
<!-- method: POST -->
<!-- data được gửi trong body request có dạng -->

body = {
name: string,
email: string,
password: string,
}

<!-- update an user -->
<!-- http::/localhost:8080/api/warehouses/users/update/:userId -->
<!-- method: PUT -->
<!-- data được gửi trong body request có dạng -->

body = {
name: string,
email: string,
password: string,
}

<!-- delete an user -->
<!-- http::/localhost:8080/api/warehouses/users/delete/:userId -->
<!-- method: DELETE -->
<!-- data được gửi trong body request có dạng -->

### Log in/out

<!-- Log in to the system -->
<!-- http::/localhost:8080/api/warehouse/users/login -->
<!-- method: POST -->

body = {
name: string,
password: string,
}

<!-- Log out -->
<!-- http::/localhost:8080/api/warehouse/users/logout/:userId -->
<!-- method: GET -->

### socket.io (nodejs) & socket.io-client (reactjs)

<!-- VÍ DỤ THẾ :v -->
<!-- ### SOCKET.IO & SOCKET.IO-CLIENT ###
ví dụ có 2 đối tượng là server và client

- tên sự kiện client connect to server
	connection
	server.on('connection', (socket) => {...})				phía nodejs
- tên sự kiện client disconnect to server
	disconnection
	server.on('disconnection', () => {})			phía nodejs
- tên sự kiện server publish data message cho client
	sendDataServer
	server.emit('sendDataServer', data)				phía nodejs
- tên sự kiện server subscribe data message từ client
	receiveDataClient
	server.on('receiveDataClient', (data) => {})	phía nodejs
- tên sự kiện client publish data message cho server
	sendDataClient
	client.emit('sendDataClient', data)				phía reactjs
- tên sự kiện server subscribe data message từ client
	receiveDataServer
	client.on('receiveDataServer', (data) => {})	phía reactjs -->
