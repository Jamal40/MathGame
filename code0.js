gdjs.HomeCode = {};
gdjs.HomeCode.GDTitleObjects1= [];
gdjs.HomeCode.GDTitleObjects2= [];
gdjs.HomeCode.GDTitleObjects3= [];
gdjs.HomeCode.GDBtnStartObjects1= [];
gdjs.HomeCode.GDBtnStartObjects2= [];
gdjs.HomeCode.GDBtnStartObjects3= [];

gdjs.HomeCode.conditionTrue_0 = {val:false};
gdjs.HomeCode.condition0IsTrue_0 = {val:false};
gdjs.HomeCode.condition1IsTrue_0 = {val:false};


gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDBtnStartObjects1Objects = Hashtable.newFrom({"BtnStart": gdjs.HomeCode.GDBtnStartObjects1});gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDBtnStartObjects1Objects = Hashtable.newFrom({"BtnStart": gdjs.HomeCode.GDBtnStartObjects1});gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{


gdjs.HomeCode.condition0IsTrue_0.val = false;
{
gdjs.HomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.HomeCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.HomeCode.GDBtnStartObjects1, gdjs.HomeCode.GDBtnStartObjects2);

{for(var i = 0, len = gdjs.HomeCode.GDBtnStartObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDBtnStartObjects2[i].setAnimationName("StartPressed");
}
}}

}


{


gdjs.HomeCode.condition0IsTrue_0.val = false;
{
gdjs.HomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.HomeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.HomeCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BtnStart"), gdjs.HomeCode.GDBtnStartObjects1);

gdjs.HomeCode.condition0IsTrue_0.val = false;
{
gdjs.HomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDBtnStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.HomeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HomeCode.GDBtnStartObjects1 */
{for(var i = 0, len = gdjs.HomeCode.GDBtnStartObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDBtnStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStart"), gdjs.HomeCode.GDBtnStartObjects1);

gdjs.HomeCode.condition0IsTrue_0.val = false;
{
gdjs.HomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDBtnStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.HomeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HomeCode.GDBtnStartObjects1 */
{for(var i = 0, len = gdjs.HomeCode.GDBtnStartObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDBtnStartObjects1[i].setAnimationName("StartHover");
}
}
{ //Subevents
gdjs.HomeCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDTitleObjects1.length = 0;
gdjs.HomeCode.GDTitleObjects2.length = 0;
gdjs.HomeCode.GDTitleObjects3.length = 0;
gdjs.HomeCode.GDBtnStartObjects1.length = 0;
gdjs.HomeCode.GDBtnStartObjects2.length = 0;
gdjs.HomeCode.GDBtnStartObjects3.length = 0;

gdjs.HomeCode.eventsList1(runtimeScene);
return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
