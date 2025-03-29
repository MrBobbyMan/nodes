class Node {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  translate(node) {
    if(node) {
      var buffer = this;
      
      buffer.x += node.x;
      buffer.y += node.y;
      buffer.z += node.z;
      
      return buffer;
    }
    translate(this.x, this.y, this.z);
  }
  
  rotateX(node) {
    if(node) {
      var buffer = this;
      
      buffer.y = this.y * cos(node.x);
      buffer.y += this.z * sin(node.x);
      buffer.z = this.y * sin(node.x);
      buffer.z += this.z * cos(node.x);
      
      return buffer;
    }
    rotateX(this.x);
  }
  
  rotateY(node) {
    if(node) {
      var buffer = this;
      
      buffer.x = this.x * cos(node.y);
      buffer.x += this.z * sin(node.y);
      buffer.z = this.x * sin(node.y);
      buffer.z += this.z * cos(node.y);
      
      return buffer;
    }
    rotateY(this.y);
  }
  
  rotateZ(node) {
    if(node) {
      var buffer = this;
      
      buffer.x = this.x * cos(node.z);
      buffer.x += this.y * sin(node.z);
      buffer.y = this.x * sin(node.z);
      buffer.y += this.y * cos(node.z);
      
      return buffer;
    }
    rotateZ(this.z);
  }
  
  scale(node) {
    if(node) {
      var buffer = this;
      
      buffer.x *= node.x;
      buffer.y *= node.y;
      buffer.z *= node.z;
      
      return buffer;
    }
    scale(this.x, this.y, this.z);
  }
}
