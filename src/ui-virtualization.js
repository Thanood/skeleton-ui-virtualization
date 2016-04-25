export class UiVirtualization {
  items = [];

  attached() {
    for (let i = 0; i < 2000; i++) {
      this.items.push({ id: i, title: `item ${i + 1}` });
    }
  }
}
