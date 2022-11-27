const URL = "./assets/my_model/";

let model, maxPredictions, highestProbability_name;

var highestProbability = 0.0;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    const flip = true;
    console.log("INIT COMPLETE");
}

async function predict() {
    var image = document.getElementById('imagePreview')
    const prediction = await model.predict(image, false);
    for(let i = 0; i < maxPredictions; i++) {
        // console.log(prediction[i])
        // console.log(prediction[i].probability.toFixed(2))
        if(prediction[i].probability.toFixed(2) > highestProbability){
            highestProbability_name = prediction[i].className;
        }
    }
    console.log(highestProbability_name);
    if(highestProbability_name == "Class 1"){//구진_플라크
        window.location.href = "./results/Class1.html"
    }else if(highestProbability_name =="Class 2"){//비듬_각질_상피성잔고리
        window.location.href = "./results/Class2.html"
    }else if(highestProbability_name =="Class 3"){//태선화_과다색소침착
        window.location.href = "./results/Class3.html"
    }else if(highestProbability_name =="Class 4"){//농포_여드름
        window.location.href = "./results/Class4.html"
    }else if(highestProbability_name =="Class 5"){//미란_궤양
        window.location.href = "./results/Class5.html"
    }else if(highestProbability_name =="Class 6"){//결절_종괴
        window.location.href = "./results/Class6.html"
    }else if(highestProbability_name =="Class 7"){//정상
        window.location.href = "./results/Class8.html"
    }
    
}


window.onload = function () {
    init();
}