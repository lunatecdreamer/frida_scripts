var documentWithPath = ObjC.classes.FIRCollectionReference["- documentWithPath:"];
var collectionWithPath = ObjC.classes.FIRFirestore["- collectionWithPath:"];

Interceptor.attach(documentWithPath.implementation, {
    onEnter: function (args) {
        var message = ObjC.Object(args[2]);
        console.log("\n[FIRCollectionReference documentWithPath:@\"" + message.toString() + "\"]");
    }
});
Interceptor.attach(collectionWithPath.implementation, {
    onEnter: function (args) {
        var message = ObjC.Object(args[2]);
        console.log("\n[FIRFireStore collectionWithPath:@\"" + message.toString() + "\"]");
    }
});
