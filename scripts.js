function addMessage(areaId, elementId, elementClass, text) {

    var area = document.getElementById(areaId);
    var already_exist = area.contains(document.getElementById(elementId));
    
    if (!already_exist) {
        var tag = document.createElement('p');
        tag.classList.add(elementClass);
        tag.id = elementId;

        var span = document.createElement('span');

        var text = document.createTextNode(text);
        span.appendChild(text);
        tag.appendChild(span);
        
        area.appendChild(tag);
    };
}

function removeIfPresent(signalId) {
    var element = document.getElementById(signalId);
    if (element != null) {
        element.remove();
        return true;
    }
    return false;
}

function toggleSignal(areaId, elementId, elementClass, text) {
    if (!removeIfPresent(elementId)) {
        addMessage(areaId,
            elementId, elementClass, text);
    }
}

function signalSpindleMotorFail() {
    toggleSignal("higlighted_red_area",
        "spindle_motor_fail", "higlighted_red_message", "SPINDLE MOTOR FAIL");

}

function signalOilFail() {
    toggleSignal("higlighted_red_area",
        "oil_fail", "higlighted_red_message", "OIL FAIL");
}

function signalHeaterFail() {
    toggleSignal("higlighted_orange_area",
        "heater_fail", "higlighted_orange_message", "HEATER FAIL");
}

function signalLightsFail() {
    toggleSignal("higlighted_orange_area",
        "lights_fail", "higlighted_orange_message", "LIGHTS FAIL");
}

function buttonRed() {
    var higlighted_area = document.getElementById("higlighted_red_area");
    var area = document.getElementById("red_area");
    if (higlighted_area.children.length > 0) {
        var elementId = higlighted_area.children[0].id;
        console.log(elementId);
        var already_exist = area.contains(document.getElementById(elementId));
        console.log(already_exist);
        if (already_exist) {
            higlighted_area.children[0].remove();
        } else {
            higlighted_area.children[0].className = "red_message";
            area.appendChild(higlighted_area.children[0]);            
        }

    }
}

function buttonOrange() {
    var higlighted_area = document.getElementById("higlighted_orange_area");
    var area = document.getElementById("yellow_area");
    if (higlighted_area.children.length > 0) {
        var elementId = higlighted_area.children[0].id;
        console.log(elementId);
        var already_exist = area.contains(document.getElementById(elementId));
        console.log(already_exist);
        if (already_exist) {
            higlighted_area.children[0].remove();
        } else {
            higlighted_area.children[0].className = "yellow_message";
            area.appendChild(higlighted_area.children[0]);            
        }
    }
}