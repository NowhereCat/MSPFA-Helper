var sampleText = "aradiaMegido: Hello\naradiaMegido: How are you?\nkarkatVantas: Bad. Fuck off";
var sampleTextMemo = "";

var presets =[
  {
    presetName: "Memo",
    tag: "memoCreator",
    textTitle: ["Aradia", "AA", "apocalypseArisen"],
    group: "custom",
    remove: "",
    replace: "",
    capitalization: "all",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "black",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Aradia",
    tag: "aradiaMegido",
    textTitle: ["Aradia", "AA", "apocalypseArisen"],
    group: "alternia",
    remove: "o",
    replace: "0",
    capitalization: "none",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#a10000",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Tavros",
    tag: "tavrosNitram",
    textTitle: ["Tavros", "AT", "adiosToreador"],
    group: "alternia",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: true,
    prefix: "",
    post: "",
    color: "#a15000",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Sollux",
    tag: "solluxCaptor",
    textTitle: ["Sollux", "TA", "twinArmageddons"],
    group: "alternia",
    remove: "s,i,to,two",
    replace: "2,ii,two,two",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#a1a100",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Karkat",
    tag: "karkatVantas",
    textTitle: ["Karkat", "CC", "carcinoGeneticist"],
    group: "alternia",
    remove: "",
    replace: "",
    capitalization: "all",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#626262",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Nepeta",
    tag: "nepetaLeijon",
    textTitle: ["Nepeta", "AC", "arsenicCatnip"],
    group: "alternia",
    remove: "ee",
    replace: "33",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: ":33",
    post: "",
    color: "#416600",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Kanaya",
    tag: "kanayaMaryam",
    textTitle: ["Kanaya", "GA", "grimAuxiliatrix"],
    group: "alternia",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#008141",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Terezi",
    tag: "tereziPyrope",
    textTitle: ["Terezi", "GC", "gallowsCalibrator"],
    group: "alternia",
    remove: "a,i,e",
    replace: "4,1,3",
    capitalization: "all",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#008282",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Vriska",
    tag: "vriskaSerket",
    textTitle: ["Vriska", "AG", "arachnidsGrip"],
    group: "alternia",
    remove: "b",
    replace: "8",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#005682",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Equius",
    tag: "equiusZahhak",
    textTitle: ["Equius", "CT", "centaursTesticle"],
    group: "alternia",
    remove: "x,l,o,nay,strong",
    replace: "%,1,0,neigh,STRONG",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "D -->",
    post: "",
    color: "#000056",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Gamzee",
    tag: "gamzeeMakara",
    textTitle: ["Gamzee", "TC", "terminallyCapricious"],
    group: "alternia",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: true,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#2b0057",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Eridan",
    tag: "eridanAmpora",
    textTitle: ["Eridan", "CA", "caligulasAquarium"],
    group: "alternia",
    remove: "w,v",
    replace: "ww,vv",
    capitalization: "none",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#6a006a",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Feferi",
    tag: "feferiPeixes",
    textTitle: ["Feferi", "CC", "cuttlefishCuller"],
    group: "alternia",
    remove: "h",
    replace: ")(",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#77003c",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Damara",
    tag: "damaraMegido",
    textTitle: ["Damara", "??", "????"],
    group: "beforus",
    remove: "",
    replace: "",
    capitalization: "none",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#a10000",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Rufioh",
    tag: "rufiohNitram",
    textTitle: ["Rufioh", "??", "????"],
    group: "beforus",
    remove: "i",
    replace: "1",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: true,
    prefix: "",
    post: "",
    color: "#a15000",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Mituna",
    tag: "mitunaCaptor",
    textTitle: ["Mituna", "??", "????"],
    group: "beforus",
    remove: "e,a,s,o,t,i,b",
    replace: "3,4,5,0,7,1,8",
    capitalization: "all",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#a1a100",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Kankri",
    tag: "kankriVantas",
    textTitle: ["Kankri", "??", "????"],
    group: "beforus",
    remove: "b,o",
    replace: "6,9",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#ff0000",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Meulin",
    tag: "meulinLeijon",
    textTitle: ["Meulin", "??", "????"],
    group: "beforus",
    remove: "ee",
    replace: "33",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: ":33",
    post: "",
    color: "#416600",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Porrim",
    tag: "porrimMaryam",
    textTitle: ["Porrim", "??", "????"],
    group: "beforus",
    remove: "o",
    replace: "o+",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#008141",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Latula",
    tag: "latulaPyrope",
    textTitle: ["Latula", "??", "????"],
    group: "beforus",
    remove: "a,i,e,girl",
    replace: "4,1,3,grl",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#008282",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Aranea",
    tag: "araneaSerket",
    textTitle: ["Aranea", "??", "????"],
    group: "beforus",
    remove: "b",
    replace: "8",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#005682",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Horuss",
    tag: "horussZahhak",
    textTitle: ["Horuss", "??", "????"],
    group: "beforus",
    remove: "x,l,o,nay,strong",
    replace: "%,1,0,neigh,STRONG",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "8=D<",
    post: "",
    color: "#000056",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Kurloz",
    tag: "kurlozMakara",
    textTitle: ["Kurloz", "??", "????"],
    group: "beforus",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#2b0057",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Cronus",
    tag: "cronusAmpora",
    textTitle: ["Cronus", "??", "????"],
    group: "beforus",
    remove: "w,v,b",
    replace: "vw,vw,8",
    capitalization: "none",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#6a006a",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Meenah",
    tag: "meenahPeixes",
    textTitle: ["Meenah", "??", "????"],
    group: "beforus",
    remove: "h",
    replace: ")(",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#77003c",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "John",
    tag: "johnEgbert",
    textTitle: ["John", "EB", "ectoBiologist"],
    group: "beta",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#0715cd",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Rose",
    tag: "roseLalonde",
    textTitle: ["Rose", "TT", "tentacleTherapist"],
    group: "beta",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#b536da",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Dave",
    tag: "daveStrider",
    textTitle: ["Dave", "TG", "turntechGodhead"],
    group: "beta",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#e00707",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Jade",
    tag: "jadeHarley",
    textTitle: ["Jade", "GG", "gardenGnostic"],
    group: "beta",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#4ac925",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Jane",
    tag: "janeCrocker",
    textTitle: ["Jane", "GG", "gutsyGumshoe"],
    group: "alpha",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#0715cd",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Roxy",
    tag: "roxyLalonde",
    textTitle: ["Roxy", "TG", "tipsyGnostalgic"],
    group: "alpha",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#b536da",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Dirk",
    tag: "dirkStrider",
    textTitle: ["Dirk", "TT", "timaeusTestified"],
    group: "alpha",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#e00707",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Jake",
    tag: "jakeEnglish",
    textTitle: ["Jake", "GT", "golgothasTerror"],
    group: "alpha",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#4ac925",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Joiboy",
    tag: "joiboyNassus",
    textTitle: ["Joiboy", "AD", "aquaticDreamer"],
    group: "custom",
    remove: "o,w",
    replace: "ô,W",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#6a006a",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Tyrous Markas (Act 1)",
    tag: "tyrousMarkasA1",
    textTitle: ["Tyrous", "AA", "alignedAffiliation"],
    group: "custom",
    remove: "n,o",
    replace: "N,O",
    capitalization: "neither",
    capsSensitive: true,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#ff0000",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Tyrous Aiolia (Act 2)",
    tag: "tyrousAioliaA2",
    textTitle: ["Tyrous", "OO", "ominousOblique"],
    group: "custom",
    remove: "n,o",
    replace: "N,O",
    capitalization: "neither",
    capsSensitive: true,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#416600",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Stella",
    tag: "stellaCapela",
    textTitle: ["Stella", "DS", "ditzyServant"],
    group: "custom",
    remove: "v",
    replace: "V",
    capitalization: "neither",
    capsSensitive: true,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#008282",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Garzim",
    tag: "garzimGyrauu",
    textTitle: ["Garzim", "SM", "serpentineMaster"],
    group: "custom",
    remove: "Hey,hey,s",
    replace: "Honk,honk,S",
    capitalization: "neither",
    capsSensitive: true,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#2b0057",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Lustra",
    tag: "lustraFotuna",
    textTitle: ["Lustra", "DE", "dualEucharists"],
    group: "custom",
    remove: "i,is",
    replace: "ii,==",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "(=)",
    post: "",
    color: "#a1a100",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Serina",
    tag: "serinaGolfos",
    textTitle: ["Serina", "UE", "underminedEmperess"],
    group: "custom",
    remove: "h",
    replace: ")(",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "--E",
    post: "3--",
    color: "#77003c",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Heivan",
    tag: "heivanNazeus",
    textTitle: ["Heivan", "GP", "gloriousPersona"],
    group: "custom",
    remove: "",
    replace: "",
    capitalization: "none",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "{",
    post: "}",
    color: "#a10000",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Skaank",
    tag: "skaankSabats",
    textTitle: ["Skaank", "MV", "maskedVisionary"],
    group: "custom",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: true,
    prefix: "|`",
    post: "´|",
    color: "#a15000",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Mike",
    tag: "mikeKirlia",
    textTitle: ["Mike", "AM", "armoredMagician"],
    group: "custom",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#89CFF0",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Hush",
    tag: "hushLegion",
    textTitle: ["Hush", "UB", "urbanBard"],
    group: "custom",
    remove: "",
    replace: "",
    capitalization: "none",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#4f0015",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Wells",
    tag: "silenceWells",
    textTitle: ["Wells", "W", "Wells"],
    group: "custom",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "black",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  },
  {
    presetName: "Darzuz",
    tag: "darzuzMacabu",
    textTitle: ["Darzuz", "DM", "Darzuz"],
    group: "custom",
    remove: "",
    replace: "",
    capitalization: "neither",
    capsSensitive: false,
    gamzeeQuirk: false,
    tavrosQuirk: false,
    prefix: "",
    post: "",
    color: "#2b0057",
    textBGColor: "white",
    titleBGColor: "white",
    titleColor: "white"
  }
];

var guideText = "";

var guideDevider = "";

for (var i = 0; i < presets.length; i++) {
  if(presets[i].group != guideDevider){
    guideText += "----------" + presets[i].group + "----------\n";
    guideDevider = presets[i].group;
  }

  guideText += presets[i].tag + "| " + presets[i].presetName + " | " + presets[i].textTitle[0] + " - " + presets[i].textTitle[1] + " - " + presets[i].textTitle[2] + "\n";

}

document.getElementById("guideTextID").innerHTML = guideText;

function SetSampleText(index){
  if(index == 0){
    document.getElementById("textInput").value = sampleText;
  } else {
    document.getElementById("textInput").value = sampleTextMemo;
  }

}

SetSampleText(0);

function AddItem(){
  var settingValue = 0;
  var itemTargetAT = document.getElementById("presetsIDAT");
  var itemTargetBU = document.getElementById("presetsIDBU");
  var itemTargetBK = document.getElementById("presetsIDBK");
  var itemTargetAK = document.getElementById("presetsIDAK");
  var itemTargetC = document.getElementById("presetsIDC");

  for (var i = 0; i < presets.length; i++) {

    var option = document.createElement("option");
    option.text = presets[i].presetName;
    option.value = settingValue;
    settingValue++;
    if(presets[i].tag != "memoCreator"){
      if(presets[i].group == "alternia"){
        itemTargetAT.appendChild(option);
      } else if(presets[i].group == "beforus"){
        itemTargetBU.appendChild(option);
      } else if(presets[i].group == "beta"){
        itemTargetBK.appendChild(option);
      } else if(presets[i].group == "alpha"){
        itemTargetAK.appendChild(option);
      } else if(presets[i].group == "custom"){
        itemTargetC.appendChild(option);
      }
    }

  }

}

AddItem();

var input = "";
var change = "";
var replacement = "";

var output = "";

var inputArray = input.split("\n");
var changeArray = change.split(",");
var replacementArray = replacement.split(",");

var prefix = "";
var suffix = "";

var userTag = [];

var textTitleIndex = 0;

function SetTitleTextInt(input){
  textTitleIndex = input;
}

//Title elements
var clientChatString = "Pestering";
var secondChatUser = "Error";
var secondChatUserInitials = "Error";
var secondChatUserColor = "black";

function FilterText(){
  var targeOutputId = document.getElementById("outputDivChildID");

  input = document.getElementById("textInput").value;
  change = "";
  replacement = "";

  output = "";

  var treatmentVar = [];
  console.log(input);
  treatmentVar = input.split("\n");
  var postTreatment = [];
  var postTreatmentInt = 0;
  for (var i = 0; i < treatmentVar.length; i++) {
    if(treatmentVar[i] != ""){
      postTreatment[postTreatmentInt] = treatmentVar[i];
      postTreatmentInt++;
    }
  }

  console.log(postTreatment);

  //inputArray = input.split("\n");
  inputArray = postTreatment;
  changeArray = change.split(",");
  replacementArray = replacement.split(",");

  console.log(inputArray);

  var labelIDInt = 0;

  //seperate tags
  var xDevide;
  var inputTags = [];
  var inputDialogue = [];
  var labelColor = [];

  //Title Update
  if(document.getElementById("chatClientTypeID").checked){
    clientChatString = "began Trolling";
  } else{
    clientChatString = "started Pestering";
  }

  //Add the for to go through multiple lines. Also the rest of the filters

  var node = document.getElementById("outputDivChildID");
  node.querySelectorAll("*").forEach(n => n.remove());

  //Set tittle

  CloneFunction("titleCloneLabelID", "outputDivChildID", "titleLabelID");
  var titleLabel = document.getElementById("titleLabelID");
  targeOutputId.appendChild(document.createElement("br"));
  targeOutputId.appendChild(document.createElement("br"));

  var secondFound = false;

  document.getElementById("secondaryOutputTextArea").innerHTML = "";

  for (var i = 0; i < inputArray.length; i++) {
    if(inputArray[i] != "") {
      xDevide = inputArray[i].split(":");
      inputTags.push(xDevide[0]);
      inputDialogue.push(xDevide[1]);
      labelColor = GetPresetColor(inputTags[i]);

      if(inputTags[i] != "memoCreator"){
        var filteredOutput = GetUserTitle(inputTags[i], textTitleIndex) + ":" + ReturnFilter(inputDialogue[i], inputTags[i]);

        //console.log(filteredOutput);

        BBCodeOutput(filteredOutput, labelColor);

        var label = document.createElement("label");
        label.innerHTML = filteredOutput;
        label.id = labelIDInt;
        targeOutputId.appendChild(label);
        targeOutputId.appendChild(document.createElement("br"));
        document.getElementById(labelIDInt).style.color = labelColor;
        labelIDInt++;
      }

      //Title Set
      if(!secondFound){
        if(inputTags[i] != presets[document.getElementById("presetsID").value].tag){
          for (var e = 0; e < presets.length; e++) {
            if(presets[e].tag == inputTags[i]){
              secondChatUser = presets[e].textTitle[2];
              secondChatUserInitials = presets[e].textTitle[1];
              secondChatUserColor = presets[e].color;
            }
          }
          secondFound = true;
          NewSetTitle();
          //titleLabel.innerHTML = SetTile();
        }
      }
    }
  }
}

var SetTile = function(){
  var chatCreatorString = presets[document.getElementById("presetsID").value].textTitle[2];
  var chatCreatorStringInitials = presets[document.getElementById("presetsID").value].textTitle[1];

  var returnOutput = "-- " + " " + chatCreatorString + " " + "[" + chatCreatorStringInitials + "]" + " started "
   + clientChatString + " " + secondChatUser + " [" + secondChatUserInitials + "] at " + document.getElementById("chatTimeID").value + " --";

   return returnOutput;
}

function NewSetTitle(){
  var chatCreatorString = presets[document.getElementById("presetsID").value].textTitle[2];
  var chatCreatorStringInitials = presets[document.getElementById("presetsID").value].textTitle[1];

  var span1 = document.createElement("span");
  span1.innerHTML = chatCreatorString + " [" + chatCreatorStringInitials + "]";
  span1.style.color = presets[document.getElementById("presetsID").value].color;

  var span2 = document.createElement("span");
  span2.innerHTML = " " + clientChatString + " ";

  var span3 = document.createElement("span");
  span3.innerHTML = " " + secondChatUser + " [" + secondChatUserInitials + "]";
  span3.style.color = secondChatUserColor;

  var span4 = document.createElement("span");
  span4.innerHTML = " at " + document.getElementById("chatTimeID").value + " --";

  var titleLabel = document.getElementById("titleLabelID");
  titleLabel.innerHTML = "-- ";
  titleLabel.appendChild(span1);
  titleLabel.appendChild(span2);
  titleLabel.appendChild(span3);
  titleLabel.appendChild(span4);
}

function BBCodeOutput(input, colorInput){
  document.getElementById("secondaryOutputTextArea").innerHTML += "[color=" + colorInput + "]" + input + "[/color]\n";
}

var InverseCaps = function (str){
  var s = '';
      var i = 0;
      while (i < str.length) {
          var n = str.charAt(i);
          if (n == n.toUpperCase()) {
              // *Call* toLowerCase
              n = n.toLowerCase();
          } else {
              // *Call* toUpperCase
              n = n.toUpperCase();
          }

          i += 1;
          s += n;
      }
      return s;
};

var ReturnFilter = function (input, presetTag){
  var removeFilter = [];
  var replaceFilter = [];
  var fixedIndex = 0;

  for (var i = 0; i < presets.length; i++) {
    if(presets[i].tag == presetTag){
      fixedIndex = i;
      //console.log( presetTag + " Match Found");
      removeFilter = presets[i].remove.split(",");
      replaceFilter = presets[i].replace.split(",");
      break;
    }
  }

  for (var i = 0; i < removeFilter.length; i++) {
    input = input.replaceAll(removeFilter[i], replaceFilter[i]);
  }

  //check if caps senseitive
  if(!presets[fixedIndex].capsSensitive){
    for (var i = 0; i < removeFilter.length; i++) {
      removeFilter[i] = removeFilter[i].toUpperCase();
    }
    for (var i = 0; i < replaceFilter.length; i++) {
      replaceFilter[i] = replaceFilter[i].toUpperCase();
    }

    for (var i = 0; i < removeFilter.length; i++) {
      input = input.replaceAll(removeFilter[i], replaceFilter[i]);
    }
  }

  //Cap Filter
  if(presets[fixedIndex].capitalization == "all"){
    input = input.toUpperCase();
  } else if(presets[fixedIndex].capitalization == "none"){
    input = input.toLowerCase();
  }

  //Special Filters
  if(presets[fixedIndex].gamzeeQuirk)
    input = GambzeeQuirkFilter(input);
  if(presets[fixedIndex].tavrosQuirk)
    input = InverseCaps(input);

  if(presets[fixedIndex].prefix != ""){
    input = " " + presets[fixedIndex].prefix + input;
  }

  if(presets[fixedIndex].suffix != ""){
    input = input + " " + presets[fixedIndex].post;
  }

  return input;
};

var GambzeeQuirkFilter = function (input){
  var seperatedString = [];
  var caps = false;

  var returnOutput = "";

  seperatedString = input.split("");

  for (var e = 0; e < seperatedString.length; e++) {
    if(caps) {
      seperatedString[e] = seperatedString[e].toUpperCase();
    } else {
      seperatedString[e] = seperatedString[e].toLowerCase();
    }
    caps = !caps;
    returnOutput += seperatedString[e];
  }

  return returnOutput;
}

var GetUserTitle = function (searchTag, index){
  var returnOutput = "Empty";
  for (var i = 0; i < presets.length; i++) {
    if(presets[i].tag == searchTag){
      //console.log(searchTag + " Match found");
      returnOutput = presets[i].textTitle[index];
      break;
    }
  }
  return returnOutput;
};

var GetPresetColor = function(searchTag){
  var colorReturn = "white";
  for (var i = 0; i < presets.length; i++) {
    if(presets[i].tag == searchTag){
      colorReturn = presets[i].color;
    }
  }
  return colorReturn;
};

function OpenDiv(divName){
  var i;
  var x = document.getElementsByClassName("outputClass");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(divName).style.display = "block";
}

var itm;

function CloneFunction(copyTarget, pasteTarget, newID){

  itm = document.getElementById(copyTarget);
  var cln = itm.cloneNode(true);
  cln.id = newID;
  cln.style.display = "block";
  document.getElementById(pasteTarget).appendChild(cln);
  //itm.remove();
}
