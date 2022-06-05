### Lấy dữ liệu từ server ###
<!-- get user data -->
<!-- http://localhost:8080/api/warehouses/users/:userId -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một object có dạng -->
getUserData = {
	id: int,
	name: string,
	email: string,
	roleId: enum('U', 'M', 'A'),
}

<!-- get warehouse list -->
<!-- http://localhost:8080/api/warehouses/all-warehouses -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một object có dạng -->
getWarehouses = {
	id: int,
	name: string,
	address: string,
	userId: int,
	createdAt: datetime,
	updatedAt: datetime,
}

<!-- get equipmentData current (equipment) -->
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

<!-- get sensorData current (sensor) -->
<!-- http://localhost:8080/api/warehouses/data/sensors/:warehouseId -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một mảng chứa các object có dạng -->
getSensorData = [
	{
		id: int,
		name: string,
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
<!-- http://localhost:8080/api/warehouses/data/daily/:warehouseId -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một mảng chứa các object có dạng -->
getDailyData = [
	{
		amt: Math.floor(Math.random() * 10),
		humid: float,
		name: string, (daily)
		temper: float
	}
]

<!-- get monthlyData (sensors) -->
<!-- http://localhost:8080/api/warehouses/data/monthly/:warehouseId -->
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
<!-- ví dụ thế -->
const data = [
  {
    id: 1,
    name: 'Light Control',
    image: 'https://svgshare.com/i/gnY.svg',
    proper1: 'Voltage',
    para1: '220V',
    proper2: 'Power',
    para2: '60W',
    proper3: 'Dimension(L*W*H)',
    para3: '20*20*6cm',
    proper4: 'Weight',
    para4: '0.36 KG',
    proper5: 'Warranty',
    para5: '1 Year',
  },
  {
    id: 2,
    name: 'Cooler Control',
    image: 'https://svgshare.com/i/gob.svg',
    proper1: 'Voltage',
    para1: '220V',
    proper2: 'Airflow',
    para2: '3400-22000 m³/h',
    proper3: 'Fin Material',
    para3: 'Alumium foil',
    proper4: 'Weight',
    para4: '133 KG',
    proper5: 'Warranty',
    para5: '1 Year',
  },
  {
    id: 3,
    name: 'Door Control',
    image: 'https://svgshare.com/i/gmz.svg',
    proper1: 'Temperature',
    para1: '-45 ~ 25',
    proper2: 'Material',
    para2: 'Polyurethane, Nonmetal',
    proper3: 'Characteristic',
    para3: 'Fire prevention',
    proper4: 'Weight',
    para4: '1 KG',
    proper5: 'Warranty',
    para5: '1 Year',
  }
]

<!-- get danh sách các thiết bị light, cooler, door -->
<!-- http://localhost:8080/api/warehouses/equipments/:warehouseId -->
<!-- method: GET -->
<!-- kết quả trả về trong response là một mảng chứa các object có dạng -->
getEquipmentList = [
	{
		id: int,               id của từng dòng dữ lỉu
		name: string,                   tên
		type: string,                   Light, Cooler hoặc Door
		location: string,
		state: boolean,
		fInfo: string,                  thông tin thêm
		date: dd/mm/yyyy,               ngày mà thiết bị chào đời
		time: HH:MM AM/PM"              giờ mà thiết bị chào đời
	}
]
<!-- dữ liệu mẫu -->
const detailData = [
  {
    id: 1,
    name: "Light LED 20W",
    type: "Light",
    location: "Warehouse 1",
    state: true,
    fInfo: "",
    date: "24.12.2020",
    time: "11:16 AM"
  },

  {
    id: 2,
    name: "Italy LUVE Unit Cooler",
    type: "Cooler",
    location: "Warehouse 2",
    state: false,
    fInfo: "Temp: 20",
    date: "24.05.2020",
    time: "8:20 PM"
  },

  {
    id: 3,
    name: "Insulated Panel Door",
    type: "Door",
    location: "Warehouse 1",
    state: true,
    fInfo: "",
    date: "24.05.2019",
    time: "8:00 AM"
  },

  {
    id: 4,
    name: "Light LED 20W",
    type: "Light",
    location: "Warehouse 3",
    state: true,
    fInfo: "",
    date: "24.12.2020",
    time: "11:16 AM"
  },

  {
    id: 5,
    name: "Italy LUVE Unit Cooler",
    type: "Cooler",
    location: "Warehouse 5",
    state: false,
    fInfo: "Temp: 25",
    date: "24.05.2020",
    time: "8:20 PM"
  },

  {
    id: 6,
    name: "Insulated Panel Door",
    type: "Door",
    location: "Warehouse 1",
    state: true,
    fInfo: "",
    date: "24.05.2019",
    time: "8:00 AM"
  },

  {
    id: 7,
    name: "Light LED 20W",
    type: "Light",
    location: "Warehouse 4",
    state: true,
    fInfo: "",
    date: "24.12.2020",
    time: "11:16 AM"
  },

  {
    id: 8,
    name: "Italy LUVE Unit Cooler",
    type: "Cooler",
    location: "Warehouse 2",
    state: false,
    fInfo: "Temp: 27",
    date: "24.05.2020",
    time: "8:20 PM"
  },

  {
    id: 9,
    name: "Insulated Panel Door",
    type: "Door",
    location: "Warehouse 5",
    state: true,
    fInfo: "",
    date: "24.05.2019",
    time: "8:00 AM"
  }
];


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
	type: enum('L', 'D', 'G')	// L = lightsensors, D = dht11s, G = gassensors
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


### Quản lý user ###
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


### Log in/out ###
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











### socket.io (nodejs) & socket.io-client (reactjs) ###
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
