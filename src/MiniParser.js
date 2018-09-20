// Generated from src/Mini.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MiniListener = require('./MiniListener').MiniListener;

   /* package declaration here */

var grammarFileName = "Mini.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003,\u00fd\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003-",
    "\n\u0003\f\u0003\u000e\u00030\u000b\u0003\u0003\u0003\u0005\u00033\n",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005?",
    "\n\u0005\r\u0005\u000e\u0005@\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007J\n\u0007\u0003",
    "\b\u0007\bM\n\b\f\b\u000e\bP\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0007\tV\n\t\f\t\u000e\tY\u000b\t\u0003\t\u0003\t\u0003\n\u0007\n^",
    "\n\n\f\n\u000e\na\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0007\fp\n\f\f\f\u000e\fs\u000b\f\u0005\f",
    "u\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0005\r{\n\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u0082\n\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u0096\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00a4\n\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00ad\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0007\u0010\u00b4\n\u0010\f\u0010\u000e\u0010\u00b7",
    "\u000b\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0007\u0011\u00bf\n\u0011\f\u0011\u000e\u0011\u00c2\u000b",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u00d7\n\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0007\u0012\u00ee\n\u0012\f\u0012\u000e\u0012\u00f1\u000b",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00f6\n\u0013",
    "\f\u0013\u000e\u0013\u00f9\u000b\u0013\u0005\u0013\u00fb\n\u0013\u0003",
    "\u0013\u0002\u0004 \"\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$\u0002\u0007\u0003\u0002\u0018",
    "\u0019\u0003\u0002\u001a\u001b\u0004\u0002\u0018\u0018\u001c\u001c\u0003",
    "\u0002\u001d \u0003\u0002!\"\u0002\u0113\u0002&\u0003\u0002\u0002\u0002",
    "\u00042\u0003\u0002\u0002\u0002\u00064\u0003\u0002\u0002\u0002\b>\u0003",
    "\u0002\u0002\u0002\nB\u0003\u0002\u0002\u0002\fI\u0003\u0002\u0002\u0002",
    "\u000eN\u0003\u0002\u0002\u0002\u0010Q\u0003\u0002\u0002\u0002\u0012",
    "_\u0003\u0002\u0002\u0002\u0014b\u0003\u0002\u0002\u0002\u0016k\u0003",
    "\u0002\u0002\u0002\u0018z\u0003\u0002\u0002\u0002\u001a\u00ac\u0003",
    "\u0002\u0002\u0002\u001c\u00ae\u0003\u0002\u0002\u0002\u001e\u00b5\u0003",
    "\u0002\u0002\u0002 \u00b8\u0003\u0002\u0002\u0002\"\u00d6\u0003\u0002",
    "\u0002\u0002$\u00fa\u0003\u0002\u0002\u0002&\'\u0005\u0004\u0003\u0002",
    "\'(\u0005\u000e\b\u0002()\u0005\u0012\n\u0002)*\u0007\u0002\u0002\u0003",
    "*\u0003\u0003\u0002\u0002\u0002+-\u0005\u0006\u0004\u0002,+\u0003\u0002",
    "\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003",
    "\u0002\u0002\u0002/3\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u0002",
    "13\u0003\u0002\u0002\u00022.\u0003\u0002\u0002\u000221\u0003\u0002\u0002",
    "\u00023\u0005\u0003\u0002\u0002\u000245\u0007\u0003\u0002\u000256\u0007",
    ")\u0002\u000267\u0007\u0004\u0002\u000278\u0005\b\u0005\u000289\u0007",
    "\u0005\u0002\u00029:\u0007\u0006\u0002\u0002:\u0007\u0003\u0002\u0002",
    "\u0002;<\u0005\n\u0006\u0002<=\u0007\u0006\u0002\u0002=?\u0003\u0002",
    "\u0002\u0002>;\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@>\u0003",
    "\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002A\t\u0003\u0002\u0002\u0002",
    "BC\u0005\f\u0007\u0002CD\u0007)\u0002\u0002D\u000b\u0003\u0002\u0002",
    "\u0002EJ\u0007\u0007\u0002\u0002FJ\u0007\b\u0002\u0002GH\u0007\u0003",
    "\u0002\u0002HJ\u0007)\u0002\u0002IE\u0003\u0002\u0002\u0002IF\u0003",
    "\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002J\r\u0003\u0002\u0002\u0002",
    "KM\u0005\u0010\t\u0002LK\u0003\u0002\u0002\u0002MP\u0003\u0002\u0002",
    "\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002O\u000f\u0003",
    "\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\u0005\f\u0007\u0002R",
    "W\u0007)\u0002\u0002ST\u0007\t\u0002\u0002TV\u0007)\u0002\u0002US\u0003",
    "\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002",
    "WX\u0003\u0002\u0002\u0002XZ\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002",
    "\u0002Z[\u0007\u0006\u0002\u0002[\u0011\u0003\u0002\u0002\u0002\\^\u0005",
    "\u0014\u000b\u0002]\\\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002",
    "_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`\u0013\u0003\u0002",
    "\u0002\u0002a_\u0003\u0002\u0002\u0002bc\u0007\n\u0002\u0002cd\u0007",
    ")\u0002\u0002de\u0005\u0016\f\u0002ef\u0005\u0018\r\u0002fg\u0007\u0004",
    "\u0002\u0002gh\u0005\u000e\b\u0002hi\u0005\u001e\u0010\u0002ij\u0007",
    "\u0005\u0002\u0002j\u0015\u0003\u0002\u0002\u0002kt\u0007\u000b\u0002",
    "\u0002lq\u0005\n\u0006\u0002mn\u0007\t\u0002\u0002np\u0005\n\u0006\u0002",
    "om\u0003\u0002\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002",
    "\u0002qr\u0003\u0002\u0002\u0002ru\u0003\u0002\u0002\u0002sq\u0003\u0002",
    "\u0002\u0002tl\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uv\u0003",
    "\u0002\u0002\u0002vw\u0007\f\u0002\u0002w\u0017\u0003\u0002\u0002\u0002",
    "x{\u0005\f\u0007\u0002y{\u0007\r\u0002\u0002zx\u0003\u0002\u0002\u0002",
    "zy\u0003\u0002\u0002\u0002{\u0019\u0003\u0002\u0002\u0002|\u00ad\u0005",
    "\u001c\u000f\u0002}~\u0005 \u0011\u0002~\u0081\u0007\u000e\u0002\u0002",
    "\u007f\u0082\u0005\"\u0012\u0002\u0080\u0082\u0007\u000f\u0002\u0002",
    "\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002",
    "\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0084\u0007\u0006\u0002\u0002",
    "\u0084\u00ad\u0003\u0002\u0002\u0002\u0085\u0086\u0007\u0010\u0002\u0002",
    "\u0086\u0087\u0005\"\u0012\u0002\u0087\u0088\u0007\u0006\u0002\u0002",
    "\u0088\u00ad\u0003\u0002\u0002\u0002\u0089\u008a\u0007\u0010\u0002\u0002",
    "\u008a\u008b\u0005\"\u0012\u0002\u008b\u008c\u0007\u0011\u0002\u0002",
    "\u008c\u008d\u0007\u0006\u0002\u0002\u008d\u00ad\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0007\u0012\u0002\u0002\u008f\u0090\u0007\u000b\u0002\u0002",
    "\u0090\u0091\u0005\"\u0012\u0002\u0091\u0092\u0007\f\u0002\u0002\u0092",
    "\u0095\u0005\u001c\u000f\u0002\u0093\u0094\u0007\u0013\u0002\u0002\u0094",
    "\u0096\u0005\u001c\u000f\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095",
    "\u0096\u0003\u0002\u0002\u0002\u0096\u00ad\u0003\u0002\u0002\u0002\u0097",
    "\u0098\u0007\u0014\u0002\u0002\u0098\u0099\u0007\u000b\u0002\u0002\u0099",
    "\u009a\u0005\"\u0012\u0002\u009a\u009b\u0007\f\u0002\u0002\u009b\u009c",
    "\u0005\u001c\u000f\u0002\u009c\u00ad\u0003\u0002\u0002\u0002\u009d\u009e",
    "\u0007\u0015\u0002\u0002\u009e\u009f\u0005\"\u0012\u0002\u009f\u00a0",
    "\u0007\u0006\u0002\u0002\u00a0\u00ad\u0003\u0002\u0002\u0002\u00a1\u00a3",
    "\u0007\u0016\u0002\u0002\u00a2\u00a4\u0005\"\u0012\u0002\u00a3\u00a2",
    "\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5",
    "\u0003\u0002\u0002\u0002\u00a5\u00ad\u0007\u0006\u0002\u0002\u00a6\u00a7",
    "\u0007)\u0002\u0002\u00a7\u00a8\u0007\u000b\u0002\u0002\u00a8\u00a9",
    "\u0005$\u0013\u0002\u00a9\u00aa\u0007\f\u0002\u0002\u00aa\u00ab\u0007",
    "\u0006\u0002\u0002\u00ab\u00ad\u0003\u0002\u0002\u0002\u00ac|\u0003",
    "\u0002\u0002\u0002\u00ac}\u0003\u0002\u0002\u0002\u00ac\u0085\u0003",
    "\u0002\u0002\u0002\u00ac\u0089\u0003\u0002\u0002\u0002\u00ac\u008e\u0003",
    "\u0002\u0002\u0002\u00ac\u0097\u0003\u0002\u0002\u0002\u00ac\u009d\u0003",
    "\u0002\u0002\u0002\u00ac\u00a1\u0003\u0002\u0002\u0002\u00ac\u00a6\u0003",
    "\u0002\u0002\u0002\u00ad\u001b\u0003\u0002\u0002\u0002\u00ae\u00af\u0007",
    "\u0004\u0002\u0002\u00af\u00b0\u0005\u001e\u0010\u0002\u00b0\u00b1\u0007",
    "\u0005\u0002\u0002\u00b1\u001d\u0003\u0002\u0002\u0002\u00b2\u00b4\u0005",
    "\u001a\u000e\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b7\u0003",
    "\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003",
    "\u0002\u0002\u0002\u00b6\u001f\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003",
    "\u0002\u0002\u0002\u00b8\u00b9\b\u0011\u0001\u0002\u00b9\u00ba\u0007",
    ")\u0002\u0002\u00ba\u00c0\u0003\u0002\u0002\u0002\u00bb\u00bc\f\u0003",
    "\u0002\u0002\u00bc\u00bd\u0007\u0017\u0002\u0002\u00bd\u00bf\u0007)",
    "\u0002\u0002\u00be\u00bb\u0003\u0002\u0002\u0002\u00bf\u00c2\u0003\u0002",
    "\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002",
    "\u0002\u0002\u00c1!\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002",
    "\u0002\u0002\u00c3\u00c4\b\u0012\u0001\u0002\u00c4\u00c5\u0007)\u0002",
    "\u0002\u00c5\u00c6\u0007\u000b\u0002\u0002\u00c6\u00c7\u0005$\u0013",
    "\u0002\u00c7\u00c8\u0007\f\u0002\u0002\u00c8\u00d7\u0003\u0002\u0002",
    "\u0002\u00c9\u00ca\t\u0002\u0002\u0002\u00ca\u00d7\u0005\"\u0012\u0010",
    "\u00cb\u00d7\u0007)\u0002\u0002\u00cc\u00d7\u0007*\u0002\u0002\u00cd",
    "\u00d7\u0007%\u0002\u0002\u00ce\u00d7\u0007&\u0002\u0002\u00cf\u00d0",
    "\u0007\'\u0002\u0002\u00d0\u00d7\u0007)\u0002\u0002\u00d1\u00d7\u0007",
    "(\u0002\u0002\u00d2\u00d3\u0007\u000b\u0002\u0002\u00d3\u00d4\u0005",
    "\"\u0012\u0002\u00d4\u00d5\u0007\f\u0002\u0002\u00d5\u00d7\u0003\u0002",
    "\u0002\u0002\u00d6\u00c3\u0003\u0002\u0002\u0002\u00d6\u00c9\u0003\u0002",
    "\u0002\u0002\u00d6\u00cb\u0003\u0002\u0002\u0002\u00d6\u00cc\u0003\u0002",
    "\u0002\u0002\u00d6\u00cd\u0003\u0002\u0002\u0002\u00d6\u00ce\u0003\u0002",
    "\u0002\u0002\u00d6\u00cf\u0003\u0002\u0002\u0002\u00d6\u00d1\u0003\u0002",
    "\u0002\u0002\u00d6\u00d2\u0003\u0002\u0002\u0002\u00d7\u00ef\u0003\u0002",
    "\u0002\u0002\u00d8\u00d9\f\u000f\u0002\u0002\u00d9\u00da\t\u0003\u0002",
    "\u0002\u00da\u00ee\u0005\"\u0012\u0010\u00db\u00dc\f\u000e\u0002\u0002",
    "\u00dc\u00dd\t\u0004\u0002\u0002\u00dd\u00ee\u0005\"\u0012\u000f\u00de",
    "\u00df\f\r\u0002\u0002\u00df\u00e0\t\u0005\u0002\u0002\u00e0\u00ee\u0005",
    "\"\u0012\u000e\u00e1\u00e2\f\f\u0002\u0002\u00e2\u00e3\t\u0006\u0002",
    "\u0002\u00e3\u00ee\u0005\"\u0012\r\u00e4\u00e5\f\u000b\u0002\u0002\u00e5",
    "\u00e6\u0007#\u0002\u0002\u00e6\u00ee\u0005\"\u0012\f\u00e7\u00e8\f",
    "\n\u0002\u0002\u00e8\u00e9\u0007$\u0002\u0002\u00e9\u00ee\u0005\"\u0012",
    "\u000b\u00ea\u00eb\f\u0011\u0002\u0002\u00eb\u00ec\u0007\u0017\u0002",
    "\u0002\u00ec\u00ee\u0007)\u0002\u0002\u00ed\u00d8\u0003\u0002\u0002",
    "\u0002\u00ed\u00db\u0003\u0002\u0002\u0002\u00ed\u00de\u0003\u0002\u0002",
    "\u0002\u00ed\u00e1\u0003\u0002\u0002\u0002\u00ed\u00e4\u0003\u0002\u0002",
    "\u0002\u00ed\u00e7\u0003\u0002\u0002\u0002\u00ed\u00ea\u0003\u0002\u0002",
    "\u0002\u00ee\u00f1\u0003\u0002\u0002\u0002\u00ef\u00ed\u0003\u0002\u0002",
    "\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0#\u0003\u0002\u0002",
    "\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f2\u00f7\u0005\"\u0012",
    "\u0002\u00f3\u00f4\u0007\t\u0002\u0002\u00f4\u00f6\u0005\"\u0012\u0002",
    "\u00f5\u00f3\u0003\u0002\u0002\u0002\u00f6\u00f9\u0003\u0002\u0002\u0002",
    "\u00f7\u00f5\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002",
    "\u00f8\u00fb\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002",
    "\u00fa\u00f2\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002",
    "\u00fb%\u0003\u0002\u0002\u0002\u0017.2@INW_qtz\u0081\u0095\u00a3\u00ac",
    "\u00b5\u00c0\u00d6\u00ed\u00ef\u00f7\u00fa"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'struct'", "'{'", "'}'", "';'", "'int'", "'bool'", 
                     "','", "'fun'", "'('", "')'", "'void'", "'='", "'read'", 
                     "'print'", "'endl'", "'if'", "'else'", "'while'", "'delete'", 
                     "'return'", "'.'", "'-'", "'!'", "'*'", "'/'", "'+'", 
                     "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", 
                     "'||'", "'true'", "'false'", "'new'", "'null'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "ID", "INTEGER", "WS", "COMMENT" ];

var ruleNames =  [ "program", "types", "typeDeclaration", "nestedDecl", 
                   "decl", "type", "declarations", "declaration", "functions", 
                   "function", "parameters", "returnType", "statement", 
                   "block", "statementList", "lvalue", "expression", "arguments" ];

function MiniParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MiniParser.prototype = Object.create(antlr4.Parser.prototype);
MiniParser.prototype.constructor = MiniParser;

Object.defineProperty(MiniParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MiniParser.EOF = antlr4.Token.EOF;
MiniParser.T__0 = 1;
MiniParser.T__1 = 2;
MiniParser.T__2 = 3;
MiniParser.T__3 = 4;
MiniParser.T__4 = 5;
MiniParser.T__5 = 6;
MiniParser.T__6 = 7;
MiniParser.T__7 = 8;
MiniParser.T__8 = 9;
MiniParser.T__9 = 10;
MiniParser.T__10 = 11;
MiniParser.T__11 = 12;
MiniParser.T__12 = 13;
MiniParser.T__13 = 14;
MiniParser.T__14 = 15;
MiniParser.T__15 = 16;
MiniParser.T__16 = 17;
MiniParser.T__17 = 18;
MiniParser.T__18 = 19;
MiniParser.T__19 = 20;
MiniParser.T__20 = 21;
MiniParser.T__21 = 22;
MiniParser.T__22 = 23;
MiniParser.T__23 = 24;
MiniParser.T__24 = 25;
MiniParser.T__25 = 26;
MiniParser.T__26 = 27;
MiniParser.T__27 = 28;
MiniParser.T__28 = 29;
MiniParser.T__29 = 30;
MiniParser.T__30 = 31;
MiniParser.T__31 = 32;
MiniParser.T__32 = 33;
MiniParser.T__33 = 34;
MiniParser.T__34 = 35;
MiniParser.T__35 = 36;
MiniParser.T__36 = 37;
MiniParser.T__37 = 38;
MiniParser.ID = 39;
MiniParser.INTEGER = 40;
MiniParser.WS = 41;
MiniParser.COMMENT = 42;

MiniParser.RULE_program = 0;
MiniParser.RULE_types = 1;
MiniParser.RULE_typeDeclaration = 2;
MiniParser.RULE_nestedDecl = 3;
MiniParser.RULE_decl = 4;
MiniParser.RULE_type = 5;
MiniParser.RULE_declarations = 6;
MiniParser.RULE_declaration = 7;
MiniParser.RULE_functions = 8;
MiniParser.RULE_function = 9;
MiniParser.RULE_parameters = 10;
MiniParser.RULE_returnType = 11;
MiniParser.RULE_statement = 12;
MiniParser.RULE_block = 13;
MiniParser.RULE_statementList = 14;
MiniParser.RULE_lvalue = 15;
MiniParser.RULE_expression = 16;
MiniParser.RULE_arguments = 17;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.types = function() {
    return this.getTypedRuleContext(TypesContext,0);
};

ProgramContext.prototype.declarations = function() {
    return this.getTypedRuleContext(DeclarationsContext,0);
};

ProgramContext.prototype.functions = function() {
    return this.getTypedRuleContext(FunctionsContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(MiniParser.EOF, 0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitProgram(this);
	}
};




MiniParser.ProgramContext = ProgramContext;

MiniParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MiniParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.types();
        this.state = 37;
        this.declarations();
        this.state = 38;
        this.functions();
        this.state = 39;
        this.match(MiniParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_types;
    return this;
}

TypesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypesContext.prototype.constructor = TypesContext;

TypesContext.prototype.typeDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeDeclarationContext);
    } else {
        return this.getTypedRuleContext(TypeDeclarationContext,i);
    }
};

TypesContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterTypes(this);
	}
};

TypesContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitTypes(this);
	}
};




MiniParser.TypesContext = TypesContext;

MiniParser.prototype.types = function() {

    var localctx = new TypesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MiniParser.RULE_types);
    try {
        this.state = 48;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 44;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 41;
                    this.typeDeclaration(); 
                }
                this.state = 46;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_typeDeclaration;
    return this;
}

TypeDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeDeclarationContext.prototype.constructor = TypeDeclarationContext;

TypeDeclarationContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

TypeDeclarationContext.prototype.nestedDecl = function() {
    return this.getTypedRuleContext(NestedDeclContext,0);
};

TypeDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterTypeDeclaration(this);
	}
};

TypeDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitTypeDeclaration(this);
	}
};




MiniParser.TypeDeclarationContext = TypeDeclarationContext;

MiniParser.prototype.typeDeclaration = function() {

    var localctx = new TypeDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MiniParser.RULE_typeDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(MiniParser.T__0);
        this.state = 51;
        this.match(MiniParser.ID);
        this.state = 52;
        this.match(MiniParser.T__1);
        this.state = 53;
        this.nestedDecl();
        this.state = 54;
        this.match(MiniParser.T__2);
        this.state = 55;
        this.match(MiniParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NestedDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_nestedDecl;
    return this;
}

NestedDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NestedDeclContext.prototype.constructor = NestedDeclContext;

NestedDeclContext.prototype.decl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclContext);
    } else {
        return this.getTypedRuleContext(DeclContext,i);
    }
};

NestedDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterNestedDecl(this);
	}
};

NestedDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitNestedDecl(this);
	}
};




MiniParser.NestedDeclContext = NestedDeclContext;

MiniParser.prototype.nestedDecl = function() {

    var localctx = new NestedDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MiniParser.RULE_nestedDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 57;
            this.decl();
            this.state = 58;
            this.match(MiniParser.T__3);
            this.state = 62; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__0) | (1 << MiniParser.T__4) | (1 << MiniParser.T__5))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_decl;
    return this;
}

DeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclContext.prototype.constructor = DeclContext;

DeclContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

DeclContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

DeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterDecl(this);
	}
};

DeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitDecl(this);
	}
};




MiniParser.DeclContext = DeclContext;

MiniParser.prototype.decl = function() {

    var localctx = new DeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MiniParser.RULE_decl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.type();
        this.state = 65;
        this.match(MiniParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;


 
TypeContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BoolTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolTypeContext.prototype = Object.create(TypeContext.prototype);
BoolTypeContext.prototype.constructor = BoolTypeContext;

MiniParser.BoolTypeContext = BoolTypeContext;

BoolTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterBoolType(this);
	}
};

BoolTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitBoolType(this);
	}
};


function StructTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StructTypeContext.prototype = Object.create(TypeContext.prototype);
StructTypeContext.prototype.constructor = StructTypeContext;

MiniParser.StructTypeContext = StructTypeContext;

StructTypeContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};
StructTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterStructType(this);
	}
};

StructTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitStructType(this);
	}
};


function IntTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntTypeContext.prototype = Object.create(TypeContext.prototype);
IntTypeContext.prototype.constructor = IntTypeContext;

MiniParser.IntTypeContext = IntTypeContext;

IntTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterIntType(this);
	}
};

IntTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitIntType(this);
	}
};



MiniParser.TypeContext = TypeContext;

MiniParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MiniParser.RULE_type);
    try {
        this.state = 71;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MiniParser.T__4:
            localctx = new IntTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 67;
            this.match(MiniParser.T__4);
            break;
        case MiniParser.T__5:
            localctx = new BoolTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 68;
            this.match(MiniParser.T__5);
            break;
        case MiniParser.T__0:
            localctx = new StructTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 69;
            this.match(MiniParser.T__0);
            this.state = 70;
            this.match(MiniParser.ID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_declarations;
    return this;
}

DeclarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationsContext.prototype.constructor = DeclarationsContext;

DeclarationsContext.prototype.declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclarationContext);
    } else {
        return this.getTypedRuleContext(DeclarationContext,i);
    }
};

DeclarationsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterDeclarations(this);
	}
};

DeclarationsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitDeclarations(this);
	}
};




MiniParser.DeclarationsContext = DeclarationsContext;

MiniParser.prototype.declarations = function() {

    var localctx = new DeclarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MiniParser.RULE_declarations);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__0) | (1 << MiniParser.T__4) | (1 << MiniParser.T__5))) !== 0)) {
            this.state = 73;
            this.declaration();
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

DeclarationContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MiniParser.ID);
    } else {
        return this.getToken(MiniParser.ID, i);
    }
};


DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitDeclaration(this);
	}
};




MiniParser.DeclarationContext = DeclarationContext;

MiniParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MiniParser.RULE_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.type();
        this.state = 80;
        this.match(MiniParser.ID);
        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__6) {
            this.state = 81;
            this.match(MiniParser.T__6);
            this.state = 82;
            this.match(MiniParser.ID);
            this.state = 87;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 88;
        this.match(MiniParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_functions;
    return this;
}

FunctionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionsContext.prototype.constructor = FunctionsContext;

FunctionsContext.prototype.function = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionContext);
    } else {
        return this.getTypedRuleContext(FunctionContext,i);
    }
};

FunctionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterFunctions(this);
	}
};

FunctionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitFunctions(this);
	}
};




MiniParser.FunctionsContext = FunctionsContext;

MiniParser.prototype.functions = function() {

    var localctx = new FunctionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MiniParser.RULE_functions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__7) {
            this.state = 90;
            this.function();
            this.state = 95;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_function;
    return this;
}

FunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionContext.prototype.constructor = FunctionContext;

FunctionContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

FunctionContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

FunctionContext.prototype.returnType = function() {
    return this.getTypedRuleContext(ReturnTypeContext,0);
};

FunctionContext.prototype.declarations = function() {
    return this.getTypedRuleContext(DeclarationsContext,0);
};

FunctionContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

FunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterFunction(this);
	}
};

FunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitFunction(this);
	}
};




MiniParser.FunctionContext = FunctionContext;

MiniParser.prototype.function = function() {

    var localctx = new FunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MiniParser.RULE_function);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(MiniParser.T__7);
        this.state = 97;
        this.match(MiniParser.ID);
        this.state = 98;
        this.parameters();
        this.state = 99;
        this.returnType();
        this.state = 100;
        this.match(MiniParser.T__1);
        this.state = 101;
        this.declarations();
        this.state = 102;
        this.statementList();
        this.state = 103;
        this.match(MiniParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.decl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclContext);
    } else {
        return this.getTypedRuleContext(DeclContext,i);
    }
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitParameters(this);
	}
};




MiniParser.ParametersContext = ParametersContext;

MiniParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MiniParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(MiniParser.T__8);
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__0) | (1 << MiniParser.T__4) | (1 << MiniParser.T__5))) !== 0)) {
            this.state = 106;
            this.decl();
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MiniParser.T__6) {
                this.state = 107;
                this.match(MiniParser.T__6);
                this.state = 108;
                this.decl();
                this.state = 113;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 116;
        this.match(MiniParser.T__9);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_returnType;
    return this;
}

ReturnTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnTypeContext.prototype.constructor = ReturnTypeContext;


 
ReturnTypeContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ReturnTypeVoidContext(parser, ctx) {
	ReturnTypeContext.call(this, parser);
    ReturnTypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnTypeVoidContext.prototype = Object.create(ReturnTypeContext.prototype);
ReturnTypeVoidContext.prototype.constructor = ReturnTypeVoidContext;

MiniParser.ReturnTypeVoidContext = ReturnTypeVoidContext;

ReturnTypeVoidContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterReturnTypeVoid(this);
	}
};

ReturnTypeVoidContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitReturnTypeVoid(this);
	}
};


function ReturnTypeRealContext(parser, ctx) {
	ReturnTypeContext.call(this, parser);
    ReturnTypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnTypeRealContext.prototype = Object.create(ReturnTypeContext.prototype);
ReturnTypeRealContext.prototype.constructor = ReturnTypeRealContext;

MiniParser.ReturnTypeRealContext = ReturnTypeRealContext;

ReturnTypeRealContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};
ReturnTypeRealContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterReturnTypeReal(this);
	}
};

ReturnTypeRealContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitReturnTypeReal(this);
	}
};



MiniParser.ReturnTypeContext = ReturnTypeContext;

MiniParser.prototype.returnType = function() {

    var localctx = new ReturnTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MiniParser.RULE_returnType);
    try {
        this.state = 120;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MiniParser.T__0:
        case MiniParser.T__4:
        case MiniParser.T__5:
            localctx = new ReturnTypeRealContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this.type();
            break;
        case MiniParser.T__10:
            localctx = new ReturnTypeVoidContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 119;
            this.match(MiniParser.T__10);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AssignmentContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentContext.prototype = Object.create(StatementContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

MiniParser.AssignmentContext = AssignmentContext;

AssignmentContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitAssignment(this);
	}
};


function DeleteContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeleteContext.prototype = Object.create(StatementContext.prototype);
DeleteContext.prototype.constructor = DeleteContext;

MiniParser.DeleteContext = DeleteContext;

DeleteContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
DeleteContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterDelete(this);
	}
};

DeleteContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitDelete(this);
	}
};


function PrintContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintContext.prototype = Object.create(StatementContext.prototype);
PrintContext.prototype.constructor = PrintContext;

MiniParser.PrintContext = PrintContext;

PrintContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PrintContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterPrint(this);
	}
};

PrintContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitPrint(this);
	}
};


function ReturnContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnContext.prototype = Object.create(StatementContext.prototype);
ReturnContext.prototype.constructor = ReturnContext;

MiniParser.ReturnContext = ReturnContext;

ReturnContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterReturn(this);
	}
};

ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitReturn(this);
	}
};


function InvocationContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InvocationContext.prototype = Object.create(StatementContext.prototype);
InvocationContext.prototype.constructor = InvocationContext;

MiniParser.InvocationContext = InvocationContext;

InvocationContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

InvocationContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
InvocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterInvocation(this);
	}
};

InvocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitInvocation(this);
	}
};


function PrintLnContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintLnContext.prototype = Object.create(StatementContext.prototype);
PrintLnContext.prototype.constructor = PrintLnContext;

MiniParser.PrintLnContext = PrintLnContext;

PrintLnContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PrintLnContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterPrintLn(this);
	}
};

PrintLnContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitPrintLn(this);
	}
};


function ConditionalContext(parser, ctx) {
	StatementContext.call(this, parser);
    this.thenBlock = null; // BlockContext;
    this.elseBlock = null; // BlockContext;
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConditionalContext.prototype = Object.create(StatementContext.prototype);
ConditionalContext.prototype.constructor = ConditionalContext;

MiniParser.ConditionalContext = ConditionalContext;

ConditionalContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ConditionalContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};
ConditionalContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterConditional(this);
	}
};

ConditionalContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitConditional(this);
	}
};


function NestedBlockContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NestedBlockContext.prototype = Object.create(StatementContext.prototype);
NestedBlockContext.prototype.constructor = NestedBlockContext;

MiniParser.NestedBlockContext = NestedBlockContext;

NestedBlockContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};
NestedBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterNestedBlock(this);
	}
};

NestedBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitNestedBlock(this);
	}
};


function WhileContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileContext.prototype = Object.create(StatementContext.prototype);
WhileContext.prototype.constructor = WhileContext;

MiniParser.WhileContext = WhileContext;

WhileContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};
WhileContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterWhile(this);
	}
};

WhileContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitWhile(this);
	}
};



MiniParser.StatementContext = StatementContext;

MiniParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, MiniParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 170;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NestedBlockContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 122;
            this.block();
            break;

        case 2:
            localctx = new AssignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 123;
            this.lvalue(0);
            this.state = 124;
            this.match(MiniParser.T__11);
            this.state = 127;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case MiniParser.T__8:
            case MiniParser.T__21:
            case MiniParser.T__22:
            case MiniParser.T__34:
            case MiniParser.T__35:
            case MiniParser.T__36:
            case MiniParser.T__37:
            case MiniParser.ID:
            case MiniParser.INTEGER:
                this.state = 125;
                this.expression(0);
                break;
            case MiniParser.T__12:
                this.state = 126;
                this.match(MiniParser.T__12);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 129;
            this.match(MiniParser.T__3);
            break;

        case 3:
            localctx = new PrintContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 131;
            this.match(MiniParser.T__13);
            this.state = 132;
            this.expression(0);
            this.state = 133;
            this.match(MiniParser.T__3);
            break;

        case 4:
            localctx = new PrintLnContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 135;
            this.match(MiniParser.T__13);
            this.state = 136;
            this.expression(0);
            this.state = 137;
            this.match(MiniParser.T__14);
            this.state = 138;
            this.match(MiniParser.T__3);
            break;

        case 5:
            localctx = new ConditionalContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 140;
            this.match(MiniParser.T__15);
            this.state = 141;
            this.match(MiniParser.T__8);
            this.state = 142;
            this.expression(0);
            this.state = 143;
            this.match(MiniParser.T__9);
            this.state = 144;
            localctx.thenBlock = this.block();
            this.state = 147;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MiniParser.T__16) {
                this.state = 145;
                this.match(MiniParser.T__16);
                this.state = 146;
                localctx.elseBlock = this.block();
            }

            break;

        case 6:
            localctx = new WhileContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 149;
            this.match(MiniParser.T__17);
            this.state = 150;
            this.match(MiniParser.T__8);
            this.state = 151;
            this.expression(0);
            this.state = 152;
            this.match(MiniParser.T__9);
            this.state = 153;
            this.block();
            break;

        case 7:
            localctx = new DeleteContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 155;
            this.match(MiniParser.T__18);
            this.state = 156;
            this.expression(0);
            this.state = 157;
            this.match(MiniParser.T__3);
            break;

        case 8:
            localctx = new ReturnContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 159;
            this.match(MiniParser.T__19);
            this.state = 161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 9)) & ~0x1f) == 0 && ((1 << (_la - 9)) & ((1 << (MiniParser.T__8 - 9)) | (1 << (MiniParser.T__21 - 9)) | (1 << (MiniParser.T__22 - 9)) | (1 << (MiniParser.T__34 - 9)) | (1 << (MiniParser.T__35 - 9)) | (1 << (MiniParser.T__36 - 9)) | (1 << (MiniParser.T__37 - 9)) | (1 << (MiniParser.ID - 9)) | (1 << (MiniParser.INTEGER - 9)))) !== 0)) {
                this.state = 160;
                this.expression(0);
            }

            this.state = 163;
            this.match(MiniParser.T__3);
            break;

        case 9:
            localctx = new InvocationContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 164;
            this.match(MiniParser.ID);
            this.state = 165;
            this.match(MiniParser.T__8);
            this.state = 166;
            this.arguments();
            this.state = 167;
            this.match(MiniParser.T__9);
            this.state = 168;
            this.match(MiniParser.T__3);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitBlock(this);
	}
};




MiniParser.BlockContext = BlockContext;

MiniParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, MiniParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(MiniParser.T__1);
        this.state = 173;
        this.statementList();
        this.state = 174;
        this.match(MiniParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_statementList;
    return this;
}

StatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListContext.prototype.constructor = StatementListContext;

StatementListContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterStatementList(this);
	}
};

StatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitStatementList(this);
	}
};




MiniParser.StatementListContext = StatementListContext;

MiniParser.prototype.statementList = function() {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, MiniParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__1) | (1 << MiniParser.T__13) | (1 << MiniParser.T__15) | (1 << MiniParser.T__17) | (1 << MiniParser.T__18) | (1 << MiniParser.T__19))) !== 0) || _la===MiniParser.ID) {
            this.state = 176;
            this.statement();
            this.state = 181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LvalueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_lvalue;
    return this;
}

LvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LvalueContext.prototype.constructor = LvalueContext;


 
LvalueContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function LvalueIdContext(parser, ctx) {
	LvalueContext.call(this, parser);
    LvalueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LvalueIdContext.prototype = Object.create(LvalueContext.prototype);
LvalueIdContext.prototype.constructor = LvalueIdContext;

MiniParser.LvalueIdContext = LvalueIdContext;

LvalueIdContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};
LvalueIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterLvalueId(this);
	}
};

LvalueIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitLvalueId(this);
	}
};


function LvalueDotContext(parser, ctx) {
	LvalueContext.call(this, parser);
    LvalueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LvalueDotContext.prototype = Object.create(LvalueContext.prototype);
LvalueDotContext.prototype.constructor = LvalueDotContext;

MiniParser.LvalueDotContext = LvalueDotContext;

LvalueDotContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

LvalueDotContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};
LvalueDotContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterLvalueDot(this);
	}
};

LvalueDotContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitLvalueDot(this);
	}
};



MiniParser.prototype.lvalue = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new LvalueContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 30;
    this.enterRecursionRule(localctx, 30, MiniParser.RULE_lvalue, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new LvalueIdContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 183;
        this.match(MiniParser.ID);
        this._ctx.stop = this._input.LT(-1);
        this.state = 190;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new LvalueDotContext(this, new LvalueContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_lvalue);
                this.state = 185;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 186;
                this.match(MiniParser.T__20);
                this.state = 187;
                this.match(MiniParser.ID); 
            }
            this.state = 192;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function IntegerExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntegerExprContext.prototype = Object.create(ExpressionContext.prototype);
IntegerExprContext.prototype.constructor = IntegerExprContext;

MiniParser.IntegerExprContext = IntegerExprContext;

IntegerExprContext.prototype.INTEGER = function() {
    return this.getToken(MiniParser.INTEGER, 0);
};
IntegerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterIntegerExpr(this);
	}
};

IntegerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitIntegerExpr(this);
	}
};


function TrueExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TrueExprContext.prototype = Object.create(ExpressionContext.prototype);
TrueExprContext.prototype.constructor = TrueExprContext;

MiniParser.TrueExprContext = TrueExprContext;

TrueExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterTrueExpr(this);
	}
};

TrueExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitTrueExpr(this);
	}
};


function IdentifierExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExprContext.prototype = Object.create(ExpressionContext.prototype);
IdentifierExprContext.prototype.constructor = IdentifierExprContext;

MiniParser.IdentifierExprContext = IdentifierExprContext;

IdentifierExprContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};
IdentifierExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterIdentifierExpr(this);
	}
};

IdentifierExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitIdentifierExpr(this);
	}
};


function BinaryExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.lft = null; // ExpressionContext;
    this.op = null; // Token;
    this.rht = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryExprContext.prototype = Object.create(ExpressionContext.prototype);
BinaryExprContext.prototype.constructor = BinaryExprContext;

MiniParser.BinaryExprContext = BinaryExprContext;

BinaryExprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BinaryExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterBinaryExpr(this);
	}
};

BinaryExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitBinaryExpr(this);
	}
};


function NewExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewExprContext.prototype = Object.create(ExpressionContext.prototype);
NewExprContext.prototype.constructor = NewExprContext;

MiniParser.NewExprContext = NewExprContext;

NewExprContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};
NewExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterNewExpr(this);
	}
};

NewExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitNewExpr(this);
	}
};


function NestedExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NestedExprContext.prototype = Object.create(ExpressionContext.prototype);
NestedExprContext.prototype.constructor = NestedExprContext;

MiniParser.NestedExprContext = NestedExprContext;

NestedExprContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NestedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterNestedExpr(this);
	}
};

NestedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitNestedExpr(this);
	}
};


function DotExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DotExprContext.prototype = Object.create(ExpressionContext.prototype);
DotExprContext.prototype.constructor = DotExprContext;

MiniParser.DotExprContext = DotExprContext;

DotExprContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DotExprContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};
DotExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterDotExpr(this);
	}
};

DotExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitDotExpr(this);
	}
};


function UnaryExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryExprContext.prototype = Object.create(ExpressionContext.prototype);
UnaryExprContext.prototype.constructor = UnaryExprContext;

MiniParser.UnaryExprContext = UnaryExprContext;

UnaryExprContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
UnaryExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterUnaryExpr(this);
	}
};

UnaryExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitUnaryExpr(this);
	}
};


function InvocationExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InvocationExprContext.prototype = Object.create(ExpressionContext.prototype);
InvocationExprContext.prototype.constructor = InvocationExprContext;

MiniParser.InvocationExprContext = InvocationExprContext;

InvocationExprContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

InvocationExprContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
InvocationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterInvocationExpr(this);
	}
};

InvocationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitInvocationExpr(this);
	}
};


function FalseExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FalseExprContext.prototype = Object.create(ExpressionContext.prototype);
FalseExprContext.prototype.constructor = FalseExprContext;

MiniParser.FalseExprContext = FalseExprContext;

FalseExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterFalseExpr(this);
	}
};

FalseExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitFalseExpr(this);
	}
};


function NullExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullExprContext.prototype = Object.create(ExpressionContext.prototype);
NullExprContext.prototype.constructor = NullExprContext;

MiniParser.NullExprContext = NullExprContext;

NullExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterNullExpr(this);
	}
};

NullExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitNullExpr(this);
	}
};



MiniParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 32;
    this.enterRecursionRule(localctx, 32, MiniParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            localctx = new InvocationExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 194;
            this.match(MiniParser.ID);
            this.state = 195;
            this.match(MiniParser.T__8);
            this.state = 196;
            this.arguments();
            this.state = 197;
            this.match(MiniParser.T__9);
            break;

        case 2:
            localctx = new UnaryExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 199;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===MiniParser.T__21 || _la===MiniParser.T__22)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 200;
            this.expression(14);
            break;

        case 3:
            localctx = new IdentifierExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 201;
            this.match(MiniParser.ID);
            break;

        case 4:
            localctx = new IntegerExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 202;
            this.match(MiniParser.INTEGER);
            break;

        case 5:
            localctx = new TrueExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 203;
            this.match(MiniParser.T__34);
            break;

        case 6:
            localctx = new FalseExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 204;
            this.match(MiniParser.T__35);
            break;

        case 7:
            localctx = new NewExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 205;
            this.match(MiniParser.T__36);
            this.state = 206;
            this.match(MiniParser.ID);
            break;

        case 8:
            localctx = new NullExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 207;
            this.match(MiniParser.T__37);
            break;

        case 9:
            localctx = new NestedExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 208;
            this.match(MiniParser.T__8);
            this.state = 209;
            this.expression(0);
            this.state = 210;
            this.match(MiniParser.T__9);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 237;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 235;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BinaryExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lft = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expression);
                    this.state = 214;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 215;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MiniParser.T__23 || _la===MiniParser.T__24)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 216;
                    localctx.rht = this.expression(14);
                    break;

                case 2:
                    localctx = new BinaryExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lft = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expression);
                    this.state = 217;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 218;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MiniParser.T__21 || _la===MiniParser.T__25)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 219;
                    localctx.rht = this.expression(13);
                    break;

                case 3:
                    localctx = new BinaryExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lft = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expression);
                    this.state = 220;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 221;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__26) | (1 << MiniParser.T__27) | (1 << MiniParser.T__28) | (1 << MiniParser.T__29))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 222;
                    localctx.rht = this.expression(12);
                    break;

                case 4:
                    localctx = new BinaryExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lft = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expression);
                    this.state = 223;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 224;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MiniParser.T__30 || _la===MiniParser.T__31)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 225;
                    localctx.rht = this.expression(11);
                    break;

                case 5:
                    localctx = new BinaryExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lft = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expression);
                    this.state = 226;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 227;
                    localctx.op = this.match(MiniParser.T__32);
                    this.state = 228;
                    localctx.rht = this.expression(10);
                    break;

                case 6:
                    localctx = new BinaryExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.lft = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expression);
                    this.state = 229;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 230;
                    localctx.op = this.match(MiniParser.T__33);
                    this.state = 231;
                    localctx.rht = this.expression(9);
                    break;

                case 7:
                    localctx = new DotExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expression);
                    this.state = 232;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }

                    this.state = 233;
                    this.match(MiniParser.T__20);
                    this.state = 234;
                    this.match(MiniParser.ID);
                    break;

                } 
            }
            this.state = 239;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitArguments(this);
	}
};




MiniParser.ArgumentsContext = ArgumentsContext;

MiniParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, MiniParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 9)) & ~0x1f) == 0 && ((1 << (_la - 9)) & ((1 << (MiniParser.T__8 - 9)) | (1 << (MiniParser.T__21 - 9)) | (1 << (MiniParser.T__22 - 9)) | (1 << (MiniParser.T__34 - 9)) | (1 << (MiniParser.T__35 - 9)) | (1 << (MiniParser.T__36 - 9)) | (1 << (MiniParser.T__37 - 9)) | (1 << (MiniParser.ID - 9)) | (1 << (MiniParser.INTEGER - 9)))) !== 0)) {
            this.state = 240;
            this.expression(0);
            this.state = 245;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MiniParser.T__6) {
                this.state = 241;
                this.match(MiniParser.T__6);
                this.state = 242;
                this.expression(0);
                this.state = 247;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


MiniParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 15:
			return this.lvalue_sempred(localctx, predIndex);
	case 16:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

MiniParser.prototype.lvalue_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

MiniParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 10);
		case 5:
			return this.precpred(this._ctx, 9);
		case 6:
			return this.precpred(this._ctx, 8);
		case 7:
			return this.precpred(this._ctx, 15);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MiniParser = MiniParser;
