const container = document.getElementById('container');

let objectTree = {
        "Рыбы": {
            "Форель": {},
            "Щука": {}
        },

        "Деревья": {
            "Хвойные": {
                "Лиственница": {},
                "Ель": {}
            },
            "Цветковые": {
                "Берёза": {},
                "Тополь": {}
            }
        }
    };


function createTree(element, object){
    function transformObjectInTree(obj) {
        const createElementUl = document.createElement("ul");
        for (let key in obj) {
            const createElementLi = document.createElement("li");
            createElementLi.innerHTML = key;
            createElementUl.append(createElementLi);
            const children = transformObjectInTree(obj[key]);
            if (children) {
                createElementLi.append(children)
            }
        }
        return createElementUl;
    }
    element.append(transformObjectInTree(object))
}

createTree(container, objectTree);
