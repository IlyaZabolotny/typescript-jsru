// Class
abstract class NodeGraph {
  x: number = 0;
  y: number = 0;

  abstract name: string;

  abstract paint(): void;

  calculate(num: number): number {
    return num;
  }
}

class StorageNode extends NodeGraph {
  name: string = "StorageNode";

  paint(): void {
    this.x = 12624120;
    this.y = 12624120;
  }
}

class FabricNode extends NodeGraph {
  name: string = "FabricNode";

  paint(): void {
    this.x = 1864512;
    this.y = 1864512;
  }
}

class CarNode extends NodeGraph {
  name: string = "CarNode";

  paint(): void {
    this.x = 1123581321;
    this.y = 1123581321;
  }
}

function paintNodes(nodes: NodeGraph[]) {
  nodes.forEach((node) => {
    node.paint();
  });
}

paintNodes([new StorageNode(), new FabricNode(), new CarNode()]);
