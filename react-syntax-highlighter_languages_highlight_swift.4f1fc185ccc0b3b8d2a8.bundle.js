(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1888:function(module,exports){module.exports=function(hljs){var SWIFT_KEYWORDS={keyword:"#available #colorLiteral #column #else #elseif #endif #file #fileLiteral #function #if #imageLiteral #line #selector #sourceLocation _ __COLUMN__ __FILE__ __FUNCTION__ __LINE__ Any as as! as? associatedtype associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",literal:"true false nil",built_in:"abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"},BLOCK_COMMENT=hljs.COMMENT("/\\*","\\*/",{contains:["self"]}),SUBST={className:"subst",begin:/\\\(/,end:"\\)",keywords:SWIFT_KEYWORDS,contains:[]},STRING={className:"string",contains:[hljs.BACKSLASH_ESCAPE,SUBST],variants:[{begin:/"""/,end:/"""/},{begin:/"/,end:/"/}]},NUMBERS={className:"number",begin:"\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",relevance:0};return SUBST.contains=[NUMBERS],{keywords:SWIFT_KEYWORDS,contains:[STRING,hljs.C_LINE_COMMENT_MODE,BLOCK_COMMENT,{className:"type",begin:"\\b[A-Z][\\wÀ-ʸ']*[!?]"},{className:"type",begin:"\\b[A-Z][\\wÀ-ʸ']*",relevance:0},NUMBERS,{className:"function",beginKeywords:"func",end:"{",excludeEnd:!0,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{begin:/</,end:/>/},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:SWIFT_KEYWORDS,contains:["self",NUMBERS,STRING,hljs.C_BLOCK_COMMENT_MODE,{begin:":"}],illegal:/["']/}],illegal:/\[|%/},{className:"class",beginKeywords:"struct protocol class extension enum",keywords:SWIFT_KEYWORDS,end:"\\{",excludeEnd:!0,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})]},{className:"meta",begin:"(@discardableResult|@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@objcMembers|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"},{beginKeywords:"import",end:/$/,contains:[hljs.C_LINE_COMMENT_MODE,BLOCK_COMMENT]}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_swift.4f1fc185ccc0b3b8d2a8.bundle.js.map