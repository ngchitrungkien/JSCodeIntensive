class Destination {

    constructor(name) {
        this.name = name;
        this.images = [];
        this.dateModified = new Date(). toISOString();
    }

    set newImage(image) {
        this.images.push(image);
    }

    get info() {
        console.log(`
        Chào mừng bạn đến với Thủ đô Hà Nội,
        sau đây chúng ta sẽ cùng đến với ${this.name},
        dưới đây là một vài hình ảnh review về địa điểm này:
        ${this.images},
        Cập nhật: ${this.dateModified}
        `);
    }
}

export {Destination};