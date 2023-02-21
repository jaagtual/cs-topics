function Node() {
    let _value = null;
    let _next = null;

    const setNextNode = newNode => _next = newNode;

    const getNextNode = () => _next;

    const setValue = value => _value = value;

    const getValue = () => _value;

    return {
        setNextNode,
        getNextNode,
        setValue,
        getValue
    }
}

function LinkedList() {
    const _head = Node();

    const append = value => {
        let curNode = _head;

        while (curNode.getNextNode() !== null) {
            curNode = curNode.getNextNode();
        }

        const newNode = Node();
        newNode.setValue(value);

        curNode.setNextNode(newNode);
    }

    const prepend = value => {
        const oldFirst = _head.getNextNode();

        const newNode = Node();
        newNode.setValue(value);

        _head.setNextNode(newNode);
        newNode.setNextNode(oldFirst);
    }

    const size = () => {
        let curNode = _head;
        let numEl = 0;

        while (curNode.getNextNode() !== null) {
            numEl++;
            curNode = curNode.getNextNode();
        }
        return numEl;
    }

    const head = () => _head;

    const tail = () => {
        let curNode = _head;

        while (curNode.getNextNode() !== null) {
            curNode = curNode.getNextNode();
        }
        return curNode;
    }

    const contains = value => {
        let curNode = _head;

        while (curNode.getNextNode() !== null) {
            curNode = curNode.getNextNode();

            if (curNode.getValue() === value) return true;
        }
        return false;
    }

    const find = value => {
        let curNode = _head;
        let idx = 0;

        while (curNode.getNextNode() !== null) {

            curNode = curNode.getNextNode();

            if (curNode.getValue() === value) return idx;

            idx++;
        }
        return null;
    }

    const insertAt = (value, idx) => {
        let prevNode = _head;
        let curNode = prevNode.getNextNode();
        let curIdx = 0;

        const newNode = Node();
        newNode.setValue(value);

        while (curNode !== null) {
            if (curIdx === idx) {
                prevNode.setNextNode(newNode);
                newNode.setNextNode(curNode);
                return;
            };

            prevNode = curNode;
            curNode = curNode.getNextNode();
            curIdx++;
        }
    }

    const toString = () => {
        let curNode = _head;
        let printStr = '[head] -> '

        while (curNode.getNextNode() !== null) {
            curNode = curNode.getNextNode();
            printStr += `${curNode.getValue()} -> `;
        }

        return printStr + `[null]`;
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        contains,
        find,
        insertAt,
        toString
    }
}

myList = LinkedList()

myList.append('test')
myList.append('new')
myList.prepend('first')
myList.prepend('zero')
console.log(myList.toString())
console.log(myList.size())
console.log(myList.tail().getValue())
console.log(myList.contains('new'))
console.log(myList.contains('news'))
console.log(myList.find('test'))
console.log(myList.find(3))
myList.insertAt('inserted_2', 2)
myList.insertAt('inserted_10', 10)
console.log(myList.toString())