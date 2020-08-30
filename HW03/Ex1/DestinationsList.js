import {Park} from './Park.js';
import {Museum} from './Museum.js';
import {Restaurant} from './Restaurant.js';
import {Destination} from './Destination.js';

class DestinationsList {

    constructor() {
        this.destinations = [];
        this.dateModified = new Date(). toISOString();
        console.log(this.destinations);
    }

    set addDestination(destination) {
        if (destination instanceof Destination) {
            this.destinations.push(destination);
        }
    }

    findDestination(name) {
        var findDestinationName = this.destinations.filter(x => {
            if (x.name.toLowerCase().indexOf(name.toLowerCase()) > -1){
                return x;
            }
        })
        console.log(`Tìm kiếm địa danh có tên là '${name}':`)
        console.log(findDestinationName)
        return findDestinationName;
    }
    get totalPrice() {
        console.log(`Tổng số tiền bạn 'ĐƯỢC' trả là:`)
        console.log(this.destinations.map(y => y.price).reduce((a,b) => (a + b),0));
    }
}

let newDestinationsList = new DestinationsList();

let congvienThuLe = new Park("Công viên Thủ Lệ",30000);
congvienThuLe.images = "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/cong-vien-thu-le/Cong-vien-thu-le-o-ha-noi-01.jpg";
congvienThuLe.info;
newDestinationsList.addDestination = congvienThuLe;

let nhahangBuffetSen = new Restaurant("Nhà hàng Buffet Sen",450000)
nhahangBuffetSen.images ="https://travelcar.vn/images/blog_b10402.png";
nhahangBuffetSen.info;
newDestinationsList.addDestination = nhahangBuffetSen;

let baotangDantochocVN = new Museum("Bảo tàng Dân tộc học Việt Nam",40000);
baotangDantochocVN.images = "https://nemtv.vn/wp-content/uploads/2019/02/bao-tang-dan-toc-hoc-viet-nam-nemtv-1.jpg";
baotangDantochocVN.info;
newDestinationsList.addDestination = baotangDantochocVN;
 
newDestinationsList.findDestination("nhà hàng");  
 
newDestinationsList.totalPrice;
