// Class
abstract class NodeGraph {
  x: number = 0;
  y: number = 0;

  abstract name: string;

  abstract paint(): void;

  calculate(): number {
    return 100;
  }
}

class StorageNode extends NodeGraph {
  name: string = "StorageNode";

  paint(): void {
    throw new Error("");
  }
}

class FabricNode extends NodeGraph {
  name: string = "FabricNode";

  paint(): void {
    throw new Error("");
  }
}

class CarNode extends NodeGraph {
  name: string = "CarNode";

  paint(): void {
    throw new Error("");
  }
}

function paintNodes(nodes: NodeGraph[]) {
  nodes.forEach((node) => {
    node.paint();
  });
}

paintNodes([new StorageNode(), new FabricNode(), new CarNode()]);
