gdjs.Level1Code = {};
gdjs.Level1Code.forEachCount0_2 = 0;

gdjs.Level1Code.forEachCount1_2 = 0;

gdjs.Level1Code.forEachCount2_2 = 0;

gdjs.Level1Code.forEachCount3_2 = 0;

gdjs.Level1Code.forEachIndex2 = 0;

gdjs.Level1Code.forEachObjects2 = [];

gdjs.Level1Code.forEachTemporary2 = null;

gdjs.Level1Code.forEachTotalCount2 = 0;

gdjs.Level1Code.GDMonsterObjects1= [];
gdjs.Level1Code.GDMonsterObjects2= [];
gdjs.Level1Code.GDMonsterObjects3= [];
gdjs.Level1Code.GDMonsterObjects4= [];
gdjs.Level1Code.GDMonsterObjects5= [];
gdjs.Level1Code.GDShape1Objects1= [];
gdjs.Level1Code.GDShape1Objects2= [];
gdjs.Level1Code.GDShape1Objects3= [];
gdjs.Level1Code.GDShape1Objects4= [];
gdjs.Level1Code.GDShape1Objects5= [];
gdjs.Level1Code.GDShape2Objects1= [];
gdjs.Level1Code.GDShape2Objects2= [];
gdjs.Level1Code.GDShape2Objects3= [];
gdjs.Level1Code.GDShape2Objects4= [];
gdjs.Level1Code.GDShape2Objects5= [];
gdjs.Level1Code.GDShape3Objects1= [];
gdjs.Level1Code.GDShape3Objects2= [];
gdjs.Level1Code.GDShape3Objects3= [];
gdjs.Level1Code.GDShape3Objects4= [];
gdjs.Level1Code.GDShape3Objects5= [];
gdjs.Level1Code.GDShape4Objects1= [];
gdjs.Level1Code.GDShape4Objects2= [];
gdjs.Level1Code.GDShape4Objects3= [];
gdjs.Level1Code.GDShape4Objects4= [];
gdjs.Level1Code.GDShape4Objects5= [];
gdjs.Level1Code.GDScoreObjects1= [];
gdjs.Level1Code.GDScoreObjects2= [];
gdjs.Level1Code.GDScoreObjects3= [];
gdjs.Level1Code.GDScoreObjects4= [];
gdjs.Level1Code.GDScoreObjects5= [];
gdjs.Level1Code.GDObstacleObjects1= [];
gdjs.Level1Code.GDObstacleObjects2= [];
gdjs.Level1Code.GDObstacleObjects3= [];
gdjs.Level1Code.GDObstacleObjects4= [];
gdjs.Level1Code.GDObstacleObjects5= [];
gdjs.Level1Code.GDLifeObjects1= [];
gdjs.Level1Code.GDLifeObjects2= [];
gdjs.Level1Code.GDLifeObjects3= [];
gdjs.Level1Code.GDLifeObjects4= [];
gdjs.Level1Code.GDLifeObjects5= [];
gdjs.Level1Code.GDGameOverObjects1= [];
gdjs.Level1Code.GDGameOverObjects2= [];
gdjs.Level1Code.GDGameOverObjects3= [];
gdjs.Level1Code.GDGameOverObjects4= [];
gdjs.Level1Code.GDGameOverObjects5= [];
gdjs.Level1Code.GDBtnTryAgainObjects1= [];
gdjs.Level1Code.GDBtnTryAgainObjects2= [];
gdjs.Level1Code.GDBtnTryAgainObjects3= [];
gdjs.Level1Code.GDBtnTryAgainObjects4= [];
gdjs.Level1Code.GDBtnTryAgainObjects5= [];
gdjs.Level1Code.GDBtnHomeObjects1= [];
gdjs.Level1Code.GDBtnHomeObjects2= [];
gdjs.Level1Code.GDBtnHomeObjects3= [];
gdjs.Level1Code.GDBtnHomeObjects4= [];
gdjs.Level1Code.GDBtnHomeObjects5= [];
gdjs.Level1Code.GDShape1ExplosionObjects1= [];
gdjs.Level1Code.GDShape1ExplosionObjects2= [];
gdjs.Level1Code.GDShape1ExplosionObjects3= [];
gdjs.Level1Code.GDShape1ExplosionObjects4= [];
gdjs.Level1Code.GDShape1ExplosionObjects5= [];
gdjs.Level1Code.GDNumbersObjects1= [];
gdjs.Level1Code.GDNumbersObjects2= [];
gdjs.Level1Code.GDNumbersObjects3= [];
gdjs.Level1Code.GDNumbersObjects4= [];
gdjs.Level1Code.GDNumbersObjects5= [];
gdjs.Level1Code.GDCongratsObjects1= [];
gdjs.Level1Code.GDCongratsObjects2= [];
gdjs.Level1Code.GDCongratsObjects3= [];
gdjs.Level1Code.GDCongratsObjects4= [];
gdjs.Level1Code.GDCongratsObjects5= [];
gdjs.Level1Code.GDSorryObjects1= [];
gdjs.Level1Code.GDSorryObjects2= [];
gdjs.Level1Code.GDSorryObjects3= [];
gdjs.Level1Code.GDSorryObjects4= [];
gdjs.Level1Code.GDSorryObjects5= [];
gdjs.Level1Code.GDNewObjectObjects1= [];
gdjs.Level1Code.GDNewObjectObjects2= [];
gdjs.Level1Code.GDNewObjectObjects3= [];
gdjs.Level1Code.GDNewObjectObjects4= [];
gdjs.Level1Code.GDNewObjectObjects5= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};


gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects2[i].getX() >= gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMonsterObjects2[k] = gdjs.Level1Code.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].addForce(-(450), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects1[i].getX() <= gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMonsterObjects1[k] = gdjs.Level1Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].addForce(450, 0, 0);
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDNumbersObjects1Objects = Hashtable.newFrom({"Numbers": gdjs.Level1Code.GDNumbersObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDNumbersObjects3Objects = Hashtable.newFrom({"Numbers": gdjs.Level1Code.GDNumbersObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMonsterObjects3Objects = Hashtable.newFrom({"Monster": gdjs.Level1Code.GDMonsterObjects3});gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level1Code.GDNumbersObjects3, gdjs.Level1Code.GDNumbersObjects4);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNumbersObjects4.length;i<l;++i) {
    if ( gdjs.Level1Code.GDNumbersObjects4[i].getVariableNumber(gdjs.Level1Code.GDNumbersObjects4[i].getVariables().getFromIndex(1)) == gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(gdjs.Level1Code.GDNumbersObjects4[i].getVariables().getFromIndex(0))), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDNumbersObjects4[k] = gdjs.Level1Code.GDNumbersObjects4[i];
        ++k;
    }
}
gdjs.Level1Code.GDNumbersObjects4.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level1Code.GDScoreObjects4);
{gdjs.evtTools.sound.playSound(runtimeScene, "right.mp3", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.Level1Code.GDScoreObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDScoreObjects4[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDNumbersObjects3, gdjs.Level1Code.GDNumbersObjects4);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNumbersObjects4.length;i<l;++i) {
    if ( gdjs.Level1Code.GDNumbersObjects4[i].getVariableNumber(gdjs.Level1Code.GDNumbersObjects4[i].getVariables().getFromIndex(1)) != gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(gdjs.Level1Code.GDNumbersObjects4[i].getVariables().getFromIndex(0))), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDNumbersObjects4[k] = gdjs.Level1Code.GDNumbersObjects4[i];
        ++k;
    }
}
gdjs.Level1Code.GDNumbersObjects4.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level1Code.GDMonsterObjects3, gdjs.Level1Code.GDMonsterObjects4);

gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level1Code.GDScoreObjects4);
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDScoreObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDScoreObjects4[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects4[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
}

}


};gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects3);
gdjs.copyArray(gdjs.Level1Code.GDNumbersObjects2, gdjs.Level1Code.GDNumbersObjects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDNumbersObjects3Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMonsterObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDNumbersObjects3 */
{for(var i = 0, len = gdjs.Level1Code.GDNumbersObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDNumbersObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level1Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{



}


{


{
}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnTryAgainObjects2Objects = Hashtable.newFrom({"BtnTryAgain": gdjs.Level1Code.GDBtnTryAgainObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnTryAgainObjects2Objects = Hashtable.newFrom({"BtnTryAgain": gdjs.Level1Code.GDBtnTryAgainObjects2});gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level1Code.GDBtnTryAgainObjects2, gdjs.Level1Code.GDBtnTryAgainObjects3);

{for(var i = 0, len = gdjs.Level1Code.GDBtnTryAgainObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnTryAgainObjects3[i].setAnimationName("TryAgainPressed");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnHomeObjects2Objects = Hashtable.newFrom({"BtnHome": gdjs.Level1Code.GDBtnHomeObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnHomeObjects1Objects = Hashtable.newFrom({"BtnHome": gdjs.Level1Code.GDBtnHomeObjects1});gdjs.Level1Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level1Code.GDBtnHomeObjects1, gdjs.Level1Code.GDBtnHomeObjects2);

{for(var i = 0, len = gdjs.Level1Code.GDBtnHomeObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnHomeObjects2[i].setAnimationName("HomePressed");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};gdjs.Level1Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level1Code.GDBtnTryAgainObjects1, gdjs.Level1Code.GDBtnTryAgainObjects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnTryAgainObjects2Objects, runtimeScene, true, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBtnTryAgainObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDBtnTryAgainObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnTryAgainObjects2[i].setAnimationName("TryAgainNormal");
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDBtnTryAgainObjects1, gdjs.Level1Code.GDBtnTryAgainObjects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnTryAgainObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBtnTryAgainObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDBtnTryAgainObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnTryAgainObjects2[i].setAnimationName("TryAgainHover");
}
}
{ //Subevents
gdjs.Level1Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Level1Code.GDBtnHomeObjects1, gdjs.Level1Code.GDBtnHomeObjects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnHomeObjects2Objects, runtimeScene, true, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBtnHomeObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDBtnHomeObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnHomeObjects2[i].setAnimationName("HomeNormal");
}
}}

}


{

/* Reuse gdjs.Level1Code.GDBtnHomeObjects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnHomeObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBtnHomeObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDBtnHomeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnHomeObjects1[i].setAnimationName("HomeHover");
}
}
{ //Subevents
gdjs.Level1Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnTryAgainObjects3Objects = Hashtable.newFrom({"BtnTryAgain": gdjs.Level1Code.GDBtnTryAgainObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnTryAgainObjects3Objects = Hashtable.newFrom({"BtnTryAgain": gdjs.Level1Code.GDBtnTryAgainObjects3});gdjs.Level1Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level1Code.GDBtnTryAgainObjects3, gdjs.Level1Code.GDBtnTryAgainObjects4);

{for(var i = 0, len = gdjs.Level1Code.GDBtnTryAgainObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnTryAgainObjects4[i].setAnimationName("TryAgainPressed");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnHomeObjects3Objects = Hashtable.newFrom({"BtnHome": gdjs.Level1Code.GDBtnHomeObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnHomeObjects2Objects = Hashtable.newFrom({"BtnHome": gdjs.Level1Code.GDBtnHomeObjects2});gdjs.Level1Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level1Code.GDBtnHomeObjects2, gdjs.Level1Code.GDBtnHomeObjects3);

{for(var i = 0, len = gdjs.Level1Code.GDBtnHomeObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnHomeObjects3[i].setAnimationName("HomePressed");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};gdjs.Level1Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level1Code.GDBtnTryAgainObjects1, gdjs.Level1Code.GDBtnTryAgainObjects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnTryAgainObjects3Objects, runtimeScene, true, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBtnTryAgainObjects3 */
{for(var i = 0, len = gdjs.Level1Code.GDBtnTryAgainObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnTryAgainObjects3[i].setAnimationName("TryAgainNormal");
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDBtnTryAgainObjects1, gdjs.Level1Code.GDBtnTryAgainObjects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnTryAgainObjects3Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBtnTryAgainObjects3 */
{for(var i = 0, len = gdjs.Level1Code.GDBtnTryAgainObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnTryAgainObjects3[i].setAnimationName("TryAgainHover");
}
}
{ //Subevents
gdjs.Level1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Level1Code.GDBtnHomeObjects1, gdjs.Level1Code.GDBtnHomeObjects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnHomeObjects3Objects, runtimeScene, true, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBtnHomeObjects3 */
{for(var i = 0, len = gdjs.Level1Code.GDBtnHomeObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnHomeObjects3[i].setAnimationName("HomeNormal");
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDBtnHomeObjects1, gdjs.Level1Code.GDBtnHomeObjects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBtnHomeObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBtnHomeObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDBtnHomeObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnHomeObjects2[i].setAnimationName("HomeHover");
}
}
{ //Subevents
gdjs.Level1Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.eventsList10 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Congrats"), gdjs.Level1Code.GDCongratsObjects2);
gdjs.copyArray(gdjs.Level1Code.GDMonsterObjects1, gdjs.Level1Code.GDMonsterObjects2);

{for(var i = 0, len = gdjs.Level1Code.GDCongratsObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDCongratsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects2[i].setAnimationName("MonsterIdle");
}
}
{ //Subevents
gdjs.Level1Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMonsterObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Sorry"), gdjs.Level1Code.GDSorryObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDSorryObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSorryObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].getBehavior("Health").Hit(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Level1Code.eventsList11 = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].addForce(-(450), 0, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].addForce(450, 0, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{



}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.3, "TextCreation");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDNumbersObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDNumbersObjects1Objects, gdjs.randomInRange(80, 520), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextCreation");
}{for(var i = 0, len = gdjs.Level1Code.GDNumbersObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNumbersObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.Level1Code.GDNumbersObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Numbers"), gdjs.Level1Code.GDNumbersObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDNumbersObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNumbersObjects1[i].addForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDNumbersObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNumbersObjects1[i].rotate(60, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Numbers"), gdjs.Level1Code.GDNumbersObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDNumbersObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDNumbersObjects1[i].getVariableNumber(gdjs.Level1Code.GDNumbersObjects1[i].getVariables().getFromIndex(0)) == -(1) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDNumbersObjects1[k] = gdjs.Level1Code.GDNumbersObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDNumbersObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDNumbersObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDNumbersObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNumbersObjects1[i].returnVariable(gdjs.Level1Code.GDNumbersObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(0, 200));
}
}{for(var i = 0, len = gdjs.Level1Code.GDNumbersObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNumbersObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.Level1Code.GDNumbersObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Numbers"), gdjs.Level1Code.GDNumbersObjects1);

for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.GDNumbersObjects1.length;++gdjs.Level1Code.forEachIndex2) {
gdjs.Level1Code.GDNumbersObjects2.length = 0;


gdjs.Level1Code.forEachTemporary2 = gdjs.Level1Code.GDNumbersObjects1[gdjs.Level1Code.forEachIndex2];
gdjs.Level1Code.GDNumbersObjects2.push(gdjs.Level1Code.forEachTemporary2);
if (true) {

{ //Subevents: 
gdjs.Level1Code.eventsList2(runtimeScene);} //Subevents end.
}
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].rotate(90, runtimeScene);
}
}}

}


{


{
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects1);

gdjs.Level1Code.forEachTotalCount2 = 0;
gdjs.Level1Code.forEachObjects2.length = 0;
gdjs.Level1Code.forEachCount0_2 = gdjs.Level1Code.GDShape1Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount0_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape1Objects1);
gdjs.Level1Code.forEachCount1_2 = gdjs.Level1Code.GDShape2Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount1_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape2Objects1);
gdjs.Level1Code.forEachCount2_2 = gdjs.Level1Code.GDShape3Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount2_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape3Objects1);
gdjs.Level1Code.forEachCount3_2 = gdjs.Level1Code.GDShape4Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount3_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape4Objects1);
for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachTotalCount2;++gdjs.Level1Code.forEachIndex2) {
gdjs.Level1Code.GDShape1Objects2.length = 0;

gdjs.Level1Code.GDShape2Objects2.length = 0;

gdjs.Level1Code.GDShape3Objects2.length = 0;

gdjs.Level1Code.GDShape4Objects2.length = 0;


if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2) {
    gdjs.Level1Code.GDShape1Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2) {
    gdjs.Level1Code.GDShape2Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2) {
    gdjs.Level1Code.GDShape3Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2+gdjs.Level1Code.forEachCount3_2) {
    gdjs.Level1Code.GDShape4Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
if (true) {

{ //Subevents: 
gdjs.Level1Code.eventsList3(runtimeScene);} //Subevents end.
}
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level1Code.GDObstacleObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].addPolarForce(90, 1.5 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].setZOrder(4);
}
}}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMonsterObjects1[k] = gdjs.Level1Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level1Code.GDLifeObjects1);
/* Reuse gdjs.Level1Code.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects1[i].setAnimationName("Life" + gdjs.evtTools.common.toString((( gdjs.Level1Code.GDMonsterObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDMonsterObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDMonsterObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDMonsterObjects1[k] = gdjs.Level1Code.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDMonsterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BtnHome"), gdjs.Level1Code.GDBtnHomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnTryAgain"), gdjs.Level1Code.GDBtnTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Congrats"), gdjs.Level1Code.GDCongratsObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level1Code.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level1Code.GDLifeObjects1);
/* Reuse gdjs.Level1Code.GDMonsterObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Numbers"), gdjs.Level1Code.GDNumbersObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level1Code.GDObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sorry"), gdjs.Level1Code.GDSorryObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects1[i].setAnimationName("life0");
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].setAnimationName("Dead");
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBtnTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnTryAgainObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBtnHomeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnHomeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDNumbersObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNumbersObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCongratsObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCongratsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDSorryObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSorryObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "EndTheGame");
}
{ //Subevents
gdjs.Level1Code.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BtnHome"), gdjs.Level1Code.GDBtnHomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnTryAgain"), gdjs.Level1Code.GDBtnTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Congrats"), gdjs.Level1Code.GDCongratsObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level1Code.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sorry"), gdjs.Level1Code.GDSorryObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDBtnTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnTryAgainObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDBtnHomeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnHomeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDSorryObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSorryObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDCongratsObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCongratsObjects1[i].hide();
}
}}

}


{



}


{


{
{runtimeScene.getVariables().get("GameSpeed").add(20 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)), "EndTheGame");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BtnHome"), gdjs.Level1Code.GDBtnHomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnTryAgain"), gdjs.Level1Code.GDBtnTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level1Code.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level1Code.GDLifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level1Code.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Numbers"), gdjs.Level1Code.GDNumbersObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level1Code.GDObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects1[i].setAnimationName("life0");
}
}{for(var i = 0, len = gdjs.Level1Code.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMonsterObjects1[i].setAnimationName("Dead");
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBtnTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnTryAgainObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBtnHomeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBtnHomeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDNumbersObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDNumbersObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level1Code.eventsList10(runtimeScene);} //End of subevents
}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDMonsterObjects1.length = 0;
gdjs.Level1Code.GDMonsterObjects2.length = 0;
gdjs.Level1Code.GDMonsterObjects3.length = 0;
gdjs.Level1Code.GDMonsterObjects4.length = 0;
gdjs.Level1Code.GDMonsterObjects5.length = 0;
gdjs.Level1Code.GDShape1Objects1.length = 0;
gdjs.Level1Code.GDShape1Objects2.length = 0;
gdjs.Level1Code.GDShape1Objects3.length = 0;
gdjs.Level1Code.GDShape1Objects4.length = 0;
gdjs.Level1Code.GDShape1Objects5.length = 0;
gdjs.Level1Code.GDShape2Objects1.length = 0;
gdjs.Level1Code.GDShape2Objects2.length = 0;
gdjs.Level1Code.GDShape2Objects3.length = 0;
gdjs.Level1Code.GDShape2Objects4.length = 0;
gdjs.Level1Code.GDShape2Objects5.length = 0;
gdjs.Level1Code.GDShape3Objects1.length = 0;
gdjs.Level1Code.GDShape3Objects2.length = 0;
gdjs.Level1Code.GDShape3Objects3.length = 0;
gdjs.Level1Code.GDShape3Objects4.length = 0;
gdjs.Level1Code.GDShape3Objects5.length = 0;
gdjs.Level1Code.GDShape4Objects1.length = 0;
gdjs.Level1Code.GDShape4Objects2.length = 0;
gdjs.Level1Code.GDShape4Objects3.length = 0;
gdjs.Level1Code.GDShape4Objects4.length = 0;
gdjs.Level1Code.GDShape4Objects5.length = 0;
gdjs.Level1Code.GDScoreObjects1.length = 0;
gdjs.Level1Code.GDScoreObjects2.length = 0;
gdjs.Level1Code.GDScoreObjects3.length = 0;
gdjs.Level1Code.GDScoreObjects4.length = 0;
gdjs.Level1Code.GDScoreObjects5.length = 0;
gdjs.Level1Code.GDObstacleObjects1.length = 0;
gdjs.Level1Code.GDObstacleObjects2.length = 0;
gdjs.Level1Code.GDObstacleObjects3.length = 0;
gdjs.Level1Code.GDObstacleObjects4.length = 0;
gdjs.Level1Code.GDObstacleObjects5.length = 0;
gdjs.Level1Code.GDLifeObjects1.length = 0;
gdjs.Level1Code.GDLifeObjects2.length = 0;
gdjs.Level1Code.GDLifeObjects3.length = 0;
gdjs.Level1Code.GDLifeObjects4.length = 0;
gdjs.Level1Code.GDLifeObjects5.length = 0;
gdjs.Level1Code.GDGameOverObjects1.length = 0;
gdjs.Level1Code.GDGameOverObjects2.length = 0;
gdjs.Level1Code.GDGameOverObjects3.length = 0;
gdjs.Level1Code.GDGameOverObjects4.length = 0;
gdjs.Level1Code.GDGameOverObjects5.length = 0;
gdjs.Level1Code.GDBtnTryAgainObjects1.length = 0;
gdjs.Level1Code.GDBtnTryAgainObjects2.length = 0;
gdjs.Level1Code.GDBtnTryAgainObjects3.length = 0;
gdjs.Level1Code.GDBtnTryAgainObjects4.length = 0;
gdjs.Level1Code.GDBtnTryAgainObjects5.length = 0;
gdjs.Level1Code.GDBtnHomeObjects1.length = 0;
gdjs.Level1Code.GDBtnHomeObjects2.length = 0;
gdjs.Level1Code.GDBtnHomeObjects3.length = 0;
gdjs.Level1Code.GDBtnHomeObjects4.length = 0;
gdjs.Level1Code.GDBtnHomeObjects5.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects5.length = 0;
gdjs.Level1Code.GDNumbersObjects1.length = 0;
gdjs.Level1Code.GDNumbersObjects2.length = 0;
gdjs.Level1Code.GDNumbersObjects3.length = 0;
gdjs.Level1Code.GDNumbersObjects4.length = 0;
gdjs.Level1Code.GDNumbersObjects5.length = 0;
gdjs.Level1Code.GDCongratsObjects1.length = 0;
gdjs.Level1Code.GDCongratsObjects2.length = 0;
gdjs.Level1Code.GDCongratsObjects3.length = 0;
gdjs.Level1Code.GDCongratsObjects4.length = 0;
gdjs.Level1Code.GDCongratsObjects5.length = 0;
gdjs.Level1Code.GDSorryObjects1.length = 0;
gdjs.Level1Code.GDSorryObjects2.length = 0;
gdjs.Level1Code.GDSorryObjects3.length = 0;
gdjs.Level1Code.GDSorryObjects4.length = 0;
gdjs.Level1Code.GDSorryObjects5.length = 0;
gdjs.Level1Code.GDNewObjectObjects1.length = 0;
gdjs.Level1Code.GDNewObjectObjects2.length = 0;
gdjs.Level1Code.GDNewObjectObjects3.length = 0;
gdjs.Level1Code.GDNewObjectObjects4.length = 0;
gdjs.Level1Code.GDNewObjectObjects5.length = 0;

gdjs.Level1Code.eventsList11(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
