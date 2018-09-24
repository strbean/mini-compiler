// Generated from src/js/grammar/Mini.g4 by ANTLR 4.7.1
// jshint ignore: start
const antlr4 = require('antlr4');
const MiniListener = require('./MiniListener').MiniListener;
const MiniVisitor = require('./MiniVisitor').MiniVisitor;


/* package declaration here */

// eslint-disable-next-line no-unused-vars
const grammarFileName = 'Mini.g4';

const serializedATN = ['\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964',
  '\u0003,\u00fd\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t',
  '\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004',
  '\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004',
  '\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004',
  '\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0003',
  '\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003-',
  '\n\u0003\f\u0003\u000e\u00030\u000b\u0003\u0003\u0003\u0005\u00033\n',
  '\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003',
  '\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005?',
  '\n\u0005\r\u0005\u000e\u0005@\u0003\u0006\u0003\u0006\u0003\u0006\u0003',
  '\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007J\n\u0007\u0003',
  '\b\u0007\bM\n\b\f\b\u000e\bP\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t',
  '\u0007\tV\n\t\f\t\u000e\tY\u000b\t\u0003\t\u0003\t\u0003\n\u0007\n^',
  '\n\n\f\n\u000e\na\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003',
  '\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003',
  '\f\u0003\f\u0003\f\u0003\f\u0007\fp\n\f\f\f\u000e\fs\u000b\f\u0005\f',
  'u\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0005\r{\n\r\u0003\u000e\u0003',
  '\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u0082\n\u000e',
  '\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e',
  '\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e',
  '\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e',
  '\u0005\u000e\u0096\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003',
  '\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003',
  '\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00a4\n\u000e\u0003\u000e',
  '\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e',
  '\u0005\u000e\u00ad\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003',
  '\u000f\u0003\u0010\u0007\u0010\u00b4\n\u0010\f\u0010\u000e\u0010\u00b7',
  '\u000b\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011',
  '\u0003\u0011\u0007\u0011\u00bf\n\u0011\f\u0011\u000e\u0011\u00c2\u000b',
  '\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003',
  '\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003',
  '\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003',
  '\u0012\u0003\u0012\u0005\u0012\u00d7\n\u0012\u0003\u0012\u0003\u0012',
  '\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012',
  '\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012',
  '\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012',
  '\u0003\u0012\u0007\u0012\u00ee\n\u0012\f\u0012\u000e\u0012\u00f1\u000b',
  '\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00f6\n\u0013',
  '\f\u0013\u000e\u0013\u00f9\u000b\u0013\u0005\u0013\u00fb\n\u0013\u0003',
  '\u0013\u0002\u0004 "\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012',
  '\u0014\u0016\u0018\u001a\u001c\u001e "$\u0002\u0007\u0003\u0002\u0018',
  '\u0019\u0003\u0002\u001a\u001b\u0004\u0002\u0018\u0018\u001c\u001c\u0003',
  '\u0002\u001d \u0003\u0002!"\u0002\u0113\u0002&\u0003\u0002\u0002\u0002',
  '\u00042\u0003\u0002\u0002\u0002\u00064\u0003\u0002\u0002\u0002\b>\u0003',
  '\u0002\u0002\u0002\nB\u0003\u0002\u0002\u0002\fI\u0003\u0002\u0002\u0002',
  '\u000eN\u0003\u0002\u0002\u0002\u0010Q\u0003\u0002\u0002\u0002\u0012',
  '_\u0003\u0002\u0002\u0002\u0014b\u0003\u0002\u0002\u0002\u0016k\u0003',
  '\u0002\u0002\u0002\u0018z\u0003\u0002\u0002\u0002\u001a\u00ac\u0003',
  '\u0002\u0002\u0002\u001c\u00ae\u0003\u0002\u0002\u0002\u001e\u00b5\u0003',
  '\u0002\u0002\u0002 \u00b8\u0003\u0002\u0002\u0002"\u00d6\u0003\u0002',
  '\u0002\u0002$\u00fa\u0003\u0002\u0002\u0002&\'\u0005\u0004\u0003\u0002',
  '\'(\u0005\u000e\b\u0002()\u0005\u0012\n\u0002)*\u0007\u0002\u0002\u0003',
  '*\u0003\u0003\u0002\u0002\u0002+-\u0005\u0006\u0004\u0002,+\u0003\u0002',
  '\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003',
  '\u0002\u0002\u0002/3\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u0002',
  '13\u0003\u0002\u0002\u00022.\u0003\u0002\u0002\u000221\u0003\u0002\u0002',
  '\u00023\u0005\u0003\u0002\u0002\u000245\u0007\u0003\u0002\u000256\u0007',
  ')\u0002\u000267\u0007\u0004\u0002\u000278\u0005\b\u0005\u000289\u0007',
  '\u0005\u0002\u00029:\u0007\u0006\u0002\u0002:\u0007\u0003\u0002\u0002',
  '\u0002;<\u0005\n\u0006\u0002<=\u0007\u0006\u0002\u0002=?\u0003\u0002',
  '\u0002\u0002>;\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@>\u0003',
  '\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002A\t\u0003\u0002\u0002\u0002',
  'BC\u0005\f\u0007\u0002CD\u0007)\u0002\u0002D\u000b\u0003\u0002\u0002',
  '\u0002EJ\u0007\u0007\u0002\u0002FJ\u0007\b\u0002\u0002GH\u0007\u0003',
  '\u0002\u0002HJ\u0007)\u0002\u0002IE\u0003\u0002\u0002\u0002IF\u0003',
  '\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002J\r\u0003\u0002\u0002\u0002',
  'KM\u0005\u0010\t\u0002LK\u0003\u0002\u0002\u0002MP\u0003\u0002\u0002',
  '\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002O\u000f\u0003',
  '\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\u0005\f\u0007\u0002R',
  'W\u0007)\u0002\u0002ST\u0007\t\u0002\u0002TV\u0007)\u0002\u0002US\u0003',
  '\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002',
  'WX\u0003\u0002\u0002\u0002XZ\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002',
  '\u0002Z[\u0007\u0006\u0002\u0002[\u0011\u0003\u0002\u0002\u0002\\^\u0005',
  '\u0014\u000b\u0002]\\\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002',
  '_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`\u0013\u0003\u0002',
  '\u0002\u0002a_\u0003\u0002\u0002\u0002bc\u0007\n\u0002\u0002cd\u0007',
  ')\u0002\u0002de\u0005\u0016\f\u0002ef\u0005\u0018\r\u0002fg\u0007\u0004',
  '\u0002\u0002gh\u0005\u000e\b\u0002hi\u0005\u001e\u0010\u0002ij\u0007',
  '\u0005\u0002\u0002j\u0015\u0003\u0002\u0002\u0002kt\u0007\u000b\u0002',
  '\u0002lq\u0005\n\u0006\u0002mn\u0007\t\u0002\u0002np\u0005\n\u0006\u0002',
  'om\u0003\u0002\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002',
  '\u0002qr\u0003\u0002\u0002\u0002ru\u0003\u0002\u0002\u0002sq\u0003\u0002',
  '\u0002\u0002tl\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uv\u0003',
  '\u0002\u0002\u0002vw\u0007\f\u0002\u0002w\u0017\u0003\u0002\u0002\u0002',
  'x{\u0005\f\u0007\u0002y{\u0007\r\u0002\u0002zx\u0003\u0002\u0002\u0002',
  'zy\u0003\u0002\u0002\u0002{\u0019\u0003\u0002\u0002\u0002|\u00ad\u0005',
  '\u001c\u000f\u0002}~\u0005 \u0011\u0002~\u0081\u0007\u000e\u0002\u0002',
  '\u007f\u0082\u0005"\u0012\u0002\u0080\u0082\u0007\u000f\u0002\u0002',
  '\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002',
  '\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0084\u0007\u0006\u0002\u0002',
  '\u0084\u00ad\u0003\u0002\u0002\u0002\u0085\u0086\u0007\u0010\u0002\u0002',
  '\u0086\u0087\u0005"\u0012\u0002\u0087\u0088\u0007\u0006\u0002\u0002',
  '\u0088\u00ad\u0003\u0002\u0002\u0002\u0089\u008a\u0007\u0010\u0002\u0002',
  '\u008a\u008b\u0005"\u0012\u0002\u008b\u008c\u0007\u0011\u0002\u0002',
  '\u008c\u008d\u0007\u0006\u0002\u0002\u008d\u00ad\u0003\u0002\u0002\u0002',
  '\u008e\u008f\u0007\u0012\u0002\u0002\u008f\u0090\u0007\u000b\u0002\u0002',
  '\u0090\u0091\u0005"\u0012\u0002\u0091\u0092\u0007\f\u0002\u0002\u0092',
  '\u0095\u0005\u001c\u000f\u0002\u0093\u0094\u0007\u0013\u0002\u0002\u0094',
  '\u0096\u0005\u001c\u000f\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095',
  '\u0096\u0003\u0002\u0002\u0002\u0096\u00ad\u0003\u0002\u0002\u0002\u0097',
  '\u0098\u0007\u0014\u0002\u0002\u0098\u0099\u0007\u000b\u0002\u0002\u0099',
  '\u009a\u0005"\u0012\u0002\u009a\u009b\u0007\f\u0002\u0002\u009b\u009c',
  '\u0005\u001c\u000f\u0002\u009c\u00ad\u0003\u0002\u0002\u0002\u009d\u009e',
  '\u0007\u0015\u0002\u0002\u009e\u009f\u0005"\u0012\u0002\u009f\u00a0',
  '\u0007\u0006\u0002\u0002\u00a0\u00ad\u0003\u0002\u0002\u0002\u00a1\u00a3',
  '\u0007\u0016\u0002\u0002\u00a2\u00a4\u0005"\u0012\u0002\u00a3\u00a2',
  '\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5',
  '\u0003\u0002\u0002\u0002\u00a5\u00ad\u0007\u0006\u0002\u0002\u00a6\u00a7',
  '\u0007)\u0002\u0002\u00a7\u00a8\u0007\u000b\u0002\u0002\u00a8\u00a9',
  '\u0005$\u0013\u0002\u00a9\u00aa\u0007\f\u0002\u0002\u00aa\u00ab\u0007',
  '\u0006\u0002\u0002\u00ab\u00ad\u0003\u0002\u0002\u0002\u00ac|\u0003',
  '\u0002\u0002\u0002\u00ac}\u0003\u0002\u0002\u0002\u00ac\u0085\u0003',
  '\u0002\u0002\u0002\u00ac\u0089\u0003\u0002\u0002\u0002\u00ac\u008e\u0003',
  '\u0002\u0002\u0002\u00ac\u0097\u0003\u0002\u0002\u0002\u00ac\u009d\u0003',
  '\u0002\u0002\u0002\u00ac\u00a1\u0003\u0002\u0002\u0002\u00ac\u00a6\u0003',
  '\u0002\u0002\u0002\u00ad\u001b\u0003\u0002\u0002\u0002\u00ae\u00af\u0007',
  '\u0004\u0002\u0002\u00af\u00b0\u0005\u001e\u0010\u0002\u00b0\u00b1\u0007',
  '\u0005\u0002\u0002\u00b1\u001d\u0003\u0002\u0002\u0002\u00b2\u00b4\u0005',
  '\u001a\u000e\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b7\u0003',
  '\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003',
  '\u0002\u0002\u0002\u00b6\u001f\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003',
  '\u0002\u0002\u0002\u00b8\u00b9\b\u0011\u0001\u0002\u00b9\u00ba\u0007',
  ')\u0002\u0002\u00ba\u00c0\u0003\u0002\u0002\u0002\u00bb\u00bc\f\u0003',
  '\u0002\u0002\u00bc\u00bd\u0007\u0017\u0002\u0002\u00bd\u00bf\u0007)',
  '\u0002\u0002\u00be\u00bb\u0003\u0002\u0002\u0002\u00bf\u00c2\u0003\u0002',
  '\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002',
  '\u0002\u0002\u00c1!\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002',
  '\u0002\u0002\u00c3\u00c4\b\u0012\u0001\u0002\u00c4\u00c5\u0007)\u0002',
  '\u0002\u00c5\u00c6\u0007\u000b\u0002\u0002\u00c6\u00c7\u0005$\u0013',
  '\u0002\u00c7\u00c8\u0007\f\u0002\u0002\u00c8\u00d7\u0003\u0002\u0002',
  '\u0002\u00c9\u00ca\t\u0002\u0002\u0002\u00ca\u00d7\u0005"\u0012\u0010',
  '\u00cb\u00d7\u0007)\u0002\u0002\u00cc\u00d7\u0007*\u0002\u0002\u00cd',
  '\u00d7\u0007%\u0002\u0002\u00ce\u00d7\u0007&\u0002\u0002\u00cf\u00d0',
  '\u0007\'\u0002\u0002\u00d0\u00d7\u0007)\u0002\u0002\u00d1\u00d7\u0007',
  '(\u0002\u0002\u00d2\u00d3\u0007\u000b\u0002\u0002\u00d3\u00d4\u0005',
  '"\u0012\u0002\u00d4\u00d5\u0007\f\u0002\u0002\u00d5\u00d7\u0003\u0002',
  '\u0002\u0002\u00d6\u00c3\u0003\u0002\u0002\u0002\u00d6\u00c9\u0003\u0002',
  '\u0002\u0002\u00d6\u00cb\u0003\u0002\u0002\u0002\u00d6\u00cc\u0003\u0002',
  '\u0002\u0002\u00d6\u00cd\u0003\u0002\u0002\u0002\u00d6\u00ce\u0003\u0002',
  '\u0002\u0002\u00d6\u00cf\u0003\u0002\u0002\u0002\u00d6\u00d1\u0003\u0002',
  '\u0002\u0002\u00d6\u00d2\u0003\u0002\u0002\u0002\u00d7\u00ef\u0003\u0002',
  '\u0002\u0002\u00d8\u00d9\f\u000f\u0002\u0002\u00d9\u00da\t\u0003\u0002',
  '\u0002\u00da\u00ee\u0005"\u0012\u0010\u00db\u00dc\f\u000e\u0002\u0002',
  '\u00dc\u00dd\t\u0004\u0002\u0002\u00dd\u00ee\u0005"\u0012\u000f\u00de',
  '\u00df\f\r\u0002\u0002\u00df\u00e0\t\u0005\u0002\u0002\u00e0\u00ee\u0005',
  '"\u0012\u000e\u00e1\u00e2\f\f\u0002\u0002\u00e2\u00e3\t\u0006\u0002',
  '\u0002\u00e3\u00ee\u0005"\u0012\r\u00e4\u00e5\f\u000b\u0002\u0002\u00e5',
  '\u00e6\u0007#\u0002\u0002\u00e6\u00ee\u0005"\u0012\f\u00e7\u00e8\f',
  '\n\u0002\u0002\u00e8\u00e9\u0007$\u0002\u0002\u00e9\u00ee\u0005"\u0012',
  '\u000b\u00ea\u00eb\f\u0011\u0002\u0002\u00eb\u00ec\u0007\u0017\u0002',
  '\u0002\u00ec\u00ee\u0007)\u0002\u0002\u00ed\u00d8\u0003\u0002\u0002',
  '\u0002\u00ed\u00db\u0003\u0002\u0002\u0002\u00ed\u00de\u0003\u0002\u0002',
  '\u0002\u00ed\u00e1\u0003\u0002\u0002\u0002\u00ed\u00e4\u0003\u0002\u0002',
  '\u0002\u00ed\u00e7\u0003\u0002\u0002\u0002\u00ed\u00ea\u0003\u0002\u0002',
  '\u0002\u00ee\u00f1\u0003\u0002\u0002\u0002\u00ef\u00ed\u0003\u0002\u0002',
  '\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0#\u0003\u0002\u0002',
  '\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f2\u00f7\u0005"\u0012',
  '\u0002\u00f3\u00f4\u0007\t\u0002\u0002\u00f4\u00f6\u0005"\u0012\u0002',
  '\u00f5\u00f3\u0003\u0002\u0002\u0002\u00f6\u00f9\u0003\u0002\u0002\u0002',
  '\u00f7\u00f5\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002',
  '\u00f8\u00fb\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002',
  '\u00fa\u00f2\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002',
  '\u00fb%\u0003\u0002\u0002\u0002\u0017.2@INW_qtz\u0081\u0095\u00a3\u00ac',
  '\u00b5\u00c0\u00d6\u00ed\u00ef\u00f7\u00fa'].join('');


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

const sharedContextCache = new antlr4.PredictionContextCache();

const literalNames = [null, '\'struct\'', '\'{\'', '\'}\'', '\';\'', '\'int\'', '\'bool\'',
  '\',\'', '\'fun\'', '\'(\'', '\')\'', '\'void\'', '\'=\'', '\'read\'',
  '\'print\'', '\'endl\'', '\'if\'', '\'else\'', '\'while\'', '\'delete\'',
  '\'return\'', '\'.\'', '\'-\'', '\'!\'', '\'*\'', '\'/\'', '\'+\'',
  '\'<\'', '\'>\'', '\'<=\'', '\'>=\'', '\'==\'', '\'!=\'', '\'&&\'',
  '\'||\'', '\'true\'', '\'false\'', '\'new\'', '\'null\''];

const symbolicNames = [null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null,
  null, null, null, 'ID', 'INTEGER', 'WS', 'COMMENT'];

const ruleNames = ['rProgram', 'rTypes', 'rTypeDeclaration', 'rNestedDecl',
  'rDecl', 'rType', 'rDeclarations', 'rDeclaration', 'rFunctions',
  'rFunction', 'rParameters', 'rReturnType', 'rStatement',
  'rBlock', 'rStatementList', 'rLvalue', 'rExpression',
  'rArguments'];

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

Object.defineProperty(MiniParser.prototype, 'atn', {
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

MiniParser.RULE_rProgram = 0;
MiniParser.RULE_rTypes = 1;
MiniParser.RULE_rTypeDeclaration = 2;
MiniParser.RULE_rNestedDecl = 3;
MiniParser.RULE_rDecl = 4;
MiniParser.RULE_rType = 5;
MiniParser.RULE_rDeclarations = 6;
MiniParser.RULE_rDeclaration = 7;
MiniParser.RULE_rFunctions = 8;
MiniParser.RULE_rFunction = 9;
MiniParser.RULE_rParameters = 10;
MiniParser.RULE_rReturnType = 11;
MiniParser.RULE_rStatement = 12;
MiniParser.RULE_rBlock = 13;
MiniParser.RULE_rStatementList = 14;
MiniParser.RULE_rLvalue = 15;
MiniParser.RULE_rExpression = 16;
MiniParser.RULE_rArguments = 17;

function RProgramContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rProgram;
  return this;
}

RProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RProgramContext.prototype.constructor = RProgramContext;

RProgramContext.prototype.rTypes = function() {
  return this.getTypedRuleContext(RTypesContext,0);
};

RProgramContext.prototype.rDeclarations = function() {
  return this.getTypedRuleContext(RDeclarationsContext,0);
};

RProgramContext.prototype.rFunctions = function() {
  return this.getTypedRuleContext(RFunctionsContext,0);
};

RProgramContext.prototype.EOF = function() {
  return this.getToken(MiniParser.EOF, 0);
};

RProgramContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRProgram(this);
  }
};

RProgramContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRProgram(this);
  }
};

RProgramContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRProgram(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RProgramContext = RProgramContext;

MiniParser.prototype.rProgram = function() {

  var localctx = new RProgramContext(this, this._ctx, this.state);
  this.enterRule(localctx, 0, MiniParser.RULE_rProgram);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 36;
    this.rTypes();
    this.state = 37;
    this.rDeclarations();
    this.state = 38;
    this.rFunctions();
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

function RTypesContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rTypes;
  return this;
}

RTypesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RTypesContext.prototype.constructor = RTypesContext;

RTypesContext.prototype.rTypeDeclaration = function(i) {
  if(i===undefined) {
    i = null;
  }
  if(i===null) {
    return this.getTypedRuleContexts(RTypeDeclarationContext);
  } else {
    return this.getTypedRuleContext(RTypeDeclarationContext,i);
  }
};

RTypesContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRTypes(this);
  }
};

RTypesContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRTypes(this);
  }
};

RTypesContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRTypes(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RTypesContext = RTypesContext;

MiniParser.prototype.rTypes = function() {

  var localctx = new RTypesContext(this, this._ctx, this.state);
  this.enterRule(localctx, 2, MiniParser.RULE_rTypes);
  try {
    this.state = 48;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
    switch(la_) {
    case 1:
      this.enterOuterAlt(localctx, 1);
      this.state = 44;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
      while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if(_alt===1) {
          this.state = 41;
          this.rTypeDeclaration(); 
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

function RTypeDeclarationContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rTypeDeclaration;
  return this;
}

RTypeDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RTypeDeclarationContext.prototype.constructor = RTypeDeclarationContext;

RTypeDeclarationContext.prototype.ID = function() {
  return this.getToken(MiniParser.ID, 0);
};

RTypeDeclarationContext.prototype.rNestedDecl = function() {
  return this.getTypedRuleContext(RNestedDeclContext,0);
};

RTypeDeclarationContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRTypeDeclaration(this);
  }
};

RTypeDeclarationContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRTypeDeclaration(this);
  }
};

RTypeDeclarationContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRTypeDeclaration(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RTypeDeclarationContext = RTypeDeclarationContext;

MiniParser.prototype.rTypeDeclaration = function() {

  var localctx = new RTypeDeclarationContext(this, this._ctx, this.state);
  this.enterRule(localctx, 4, MiniParser.RULE_rTypeDeclaration);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 50;
    this.match(MiniParser.T__0);
    this.state = 51;
    this.match(MiniParser.ID);
    this.state = 52;
    this.match(MiniParser.T__1);
    this.state = 53;
    this.rNestedDecl();
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

function RNestedDeclContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rNestedDecl;
  return this;
}

RNestedDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RNestedDeclContext.prototype.constructor = RNestedDeclContext;

RNestedDeclContext.prototype.rDecl = function(i) {
  if(i===undefined) {
    i = null;
  }
  if(i===null) {
    return this.getTypedRuleContexts(RDeclContext);
  } else {
    return this.getTypedRuleContext(RDeclContext,i);
  }
};

RNestedDeclContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRNestedDecl(this);
  }
};

RNestedDeclContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRNestedDecl(this);
  }
};

RNestedDeclContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRNestedDecl(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RNestedDeclContext = RNestedDeclContext;

MiniParser.prototype.rNestedDecl = function() {

  var localctx = new RNestedDeclContext(this, this._ctx, this.state);
  this.enterRule(localctx, 6, MiniParser.RULE_rNestedDecl);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 60; 
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    do {
      this.state = 57;
      this.rDecl();
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

function RDeclContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rDecl;
  return this;
}

RDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RDeclContext.prototype.constructor = RDeclContext;

RDeclContext.prototype.rType = function() {
  return this.getTypedRuleContext(RTypeContext,0);
};

RDeclContext.prototype.ID = function() {
  return this.getToken(MiniParser.ID, 0);
};

RDeclContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRDecl(this);
  }
};

RDeclContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRDecl(this);
  }
};

RDeclContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRDecl(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RDeclContext = RDeclContext;

MiniParser.prototype.rDecl = function() {

  var localctx = new RDeclContext(this, this._ctx, this.state);
  this.enterRule(localctx, 8, MiniParser.RULE_rDecl);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 64;
    this.rType();
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

function RTypeContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rType;
  return this;
}

RTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RTypeContext.prototype.constructor = RTypeContext;


 
RTypeContext.prototype.copyFrom = function(ctx) {
  antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BoolTypeContext(parser, ctx) {
  RTypeContext.call(this, parser);
  RTypeContext.prototype.copyFrom.call(this, ctx);
  return this;
}

BoolTypeContext.prototype = Object.create(RTypeContext.prototype);
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

BoolTypeContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitBoolType(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function StructTypeContext(parser, ctx) {
  RTypeContext.call(this, parser);
  RTypeContext.prototype.copyFrom.call(this, ctx);
  return this;
}

StructTypeContext.prototype = Object.create(RTypeContext.prototype);
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

StructTypeContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitStructType(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function IntTypeContext(parser, ctx) {
  RTypeContext.call(this, parser);
  RTypeContext.prototype.copyFrom.call(this, ctx);
  return this;
}

IntTypeContext.prototype = Object.create(RTypeContext.prototype);
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

IntTypeContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitIntType(this);
  } else {
    return visitor.visitChildren(this);
  }
};



MiniParser.RTypeContext = RTypeContext;

MiniParser.prototype.rType = function() {

  var localctx = new RTypeContext(this, this._ctx, this.state);
  this.enterRule(localctx, 10, MiniParser.RULE_rType);
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

function RDeclarationsContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rDeclarations;
  return this;
}

RDeclarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RDeclarationsContext.prototype.constructor = RDeclarationsContext;

RDeclarationsContext.prototype.rDeclaration = function(i) {
  if(i===undefined) {
    i = null;
  }
  if(i===null) {
    return this.getTypedRuleContexts(RDeclarationContext);
  } else {
    return this.getTypedRuleContext(RDeclarationContext,i);
  }
};

RDeclarationsContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRDeclarations(this);
  }
};

RDeclarationsContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRDeclarations(this);
  }
};

RDeclarationsContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRDeclarations(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RDeclarationsContext = RDeclarationsContext;

MiniParser.prototype.rDeclarations = function() {

  var localctx = new RDeclarationsContext(this, this._ctx, this.state);
  this.enterRule(localctx, 12, MiniParser.RULE_rDeclarations);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 76;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__0) | (1 << MiniParser.T__4) | (1 << MiniParser.T__5))) !== 0)) {
      this.state = 73;
      this.rDeclaration();
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

function RDeclarationContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rDeclaration;
  return this;
}

RDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RDeclarationContext.prototype.constructor = RDeclarationContext;

RDeclarationContext.prototype.rType = function() {
  return this.getTypedRuleContext(RTypeContext,0);
};

RDeclarationContext.prototype.ID = function(i) {
  if(i===undefined) {
    i = null;
  }
  if(i===null) {
    return this.getTokens(MiniParser.ID);
  } else {
    return this.getToken(MiniParser.ID, i);
  }
};


RDeclarationContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRDeclaration(this);
  }
};

RDeclarationContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRDeclaration(this);
  }
};

RDeclarationContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRDeclaration(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RDeclarationContext = RDeclarationContext;

MiniParser.prototype.rDeclaration = function() {

  var localctx = new RDeclarationContext(this, this._ctx, this.state);
  this.enterRule(localctx, 14, MiniParser.RULE_rDeclaration);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 79;
    this.rType();
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

function RFunctionsContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rFunctions;
  return this;
}

RFunctionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RFunctionsContext.prototype.constructor = RFunctionsContext;

RFunctionsContext.prototype.rFunction = function(i) {
  if(i===undefined) {
    i = null;
  }
  if(i===null) {
    return this.getTypedRuleContexts(RFunctionContext);
  } else {
    return this.getTypedRuleContext(RFunctionContext,i);
  }
};

RFunctionsContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRFunctions(this);
  }
};

RFunctionsContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRFunctions(this);
  }
};

RFunctionsContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRFunctions(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RFunctionsContext = RFunctionsContext;

MiniParser.prototype.rFunctions = function() {

  var localctx = new RFunctionsContext(this, this._ctx, this.state);
  this.enterRule(localctx, 16, MiniParser.RULE_rFunctions);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 93;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while(_la===MiniParser.T__7) {
      this.state = 90;
      this.rFunction();
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

function RFunctionContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rFunction;
  return this;
}

RFunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RFunctionContext.prototype.constructor = RFunctionContext;

RFunctionContext.prototype.ID = function() {
  return this.getToken(MiniParser.ID, 0);
};

RFunctionContext.prototype.rParameters = function() {
  return this.getTypedRuleContext(RParametersContext,0);
};

RFunctionContext.prototype.rReturnType = function() {
  return this.getTypedRuleContext(RReturnTypeContext,0);
};

RFunctionContext.prototype.rDeclarations = function() {
  return this.getTypedRuleContext(RDeclarationsContext,0);
};

RFunctionContext.prototype.rStatementList = function() {
  return this.getTypedRuleContext(RStatementListContext,0);
};

RFunctionContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRFunction(this);
  }
};

RFunctionContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRFunction(this);
  }
};

RFunctionContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRFunction(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RFunctionContext = RFunctionContext;

MiniParser.prototype.rFunction = function() {

  var localctx = new RFunctionContext(this, this._ctx, this.state);
  this.enterRule(localctx, 18, MiniParser.RULE_rFunction);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 96;
    this.match(MiniParser.T__7);
    this.state = 97;
    this.match(MiniParser.ID);
    this.state = 98;
    this.rParameters();
    this.state = 99;
    this.rReturnType();
    this.state = 100;
    this.match(MiniParser.T__1);
    this.state = 101;
    this.rDeclarations();
    this.state = 102;
    this.rStatementList();
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

function RParametersContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rParameters;
  return this;
}

RParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RParametersContext.prototype.constructor = RParametersContext;

RParametersContext.prototype.rDecl = function(i) {
  if(i===undefined) {
    i = null;
  }
  if(i===null) {
    return this.getTypedRuleContexts(RDeclContext);
  } else {
    return this.getTypedRuleContext(RDeclContext,i);
  }
};

RParametersContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRParameters(this);
  }
};

RParametersContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRParameters(this);
  }
};

RParametersContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRParameters(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RParametersContext = RParametersContext;

MiniParser.prototype.rParameters = function() {

  var localctx = new RParametersContext(this, this._ctx, this.state);
  this.enterRule(localctx, 20, MiniParser.RULE_rParameters);
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
      this.rDecl();
      this.state = 111;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while(_la===MiniParser.T__6) {
        this.state = 107;
        this.match(MiniParser.T__6);
        this.state = 108;
        this.rDecl();
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

function RReturnTypeContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rReturnType;
  return this;
}

RReturnTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RReturnTypeContext.prototype.constructor = RReturnTypeContext;


 
RReturnTypeContext.prototype.copyFrom = function(ctx) {
  antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ReturnTypeVoidContext(parser, ctx) {
  RReturnTypeContext.call(this, parser);
  RReturnTypeContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ReturnTypeVoidContext.prototype = Object.create(RReturnTypeContext.prototype);
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

ReturnTypeVoidContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitReturnTypeVoid(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function ReturnTypeRealContext(parser, ctx) {
  RReturnTypeContext.call(this, parser);
  RReturnTypeContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ReturnTypeRealContext.prototype = Object.create(RReturnTypeContext.prototype);
ReturnTypeRealContext.prototype.constructor = ReturnTypeRealContext;

MiniParser.ReturnTypeRealContext = ReturnTypeRealContext;

ReturnTypeRealContext.prototype.rType = function() {
  return this.getTypedRuleContext(RTypeContext,0);
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

ReturnTypeRealContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitReturnTypeReal(this);
  } else {
    return visitor.visitChildren(this);
  }
};



MiniParser.RReturnTypeContext = RReturnTypeContext;

MiniParser.prototype.rReturnType = function() {

  var localctx = new RReturnTypeContext(this, this._ctx, this.state);
  this.enterRule(localctx, 22, MiniParser.RULE_rReturnType);
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
      this.rType();
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

function RStatementContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rStatement;
  return this;
}

RStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RStatementContext.prototype.constructor = RStatementContext;


 
RStatementContext.prototype.copyFrom = function(ctx) {
  antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AssignmentContext(parser, ctx) {
  RStatementContext.call(this, parser);
  RStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

AssignmentContext.prototype = Object.create(RStatementContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

MiniParser.AssignmentContext = AssignmentContext;

AssignmentContext.prototype.rLvalue = function() {
  return this.getTypedRuleContext(RLvalueContext,0);
};

AssignmentContext.prototype.rExpression = function() {
  return this.getTypedRuleContext(RExpressionContext,0);
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

AssignmentContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitAssignment(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function DeleteContext(parser, ctx) {
  RStatementContext.call(this, parser);
  RStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

DeleteContext.prototype = Object.create(RStatementContext.prototype);
DeleteContext.prototype.constructor = DeleteContext;

MiniParser.DeleteContext = DeleteContext;

DeleteContext.prototype.rExpression = function() {
  return this.getTypedRuleContext(RExpressionContext,0);
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

DeleteContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitDelete(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function PrintContext(parser, ctx) {
  RStatementContext.call(this, parser);
  RStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

PrintContext.prototype = Object.create(RStatementContext.prototype);
PrintContext.prototype.constructor = PrintContext;

MiniParser.PrintContext = PrintContext;

PrintContext.prototype.rExpression = function() {
  return this.getTypedRuleContext(RExpressionContext,0);
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

PrintContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitPrint(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function ReturnContext(parser, ctx) {
  RStatementContext.call(this, parser);
  RStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ReturnContext.prototype = Object.create(RStatementContext.prototype);
ReturnContext.prototype.constructor = ReturnContext;

MiniParser.ReturnContext = ReturnContext;

ReturnContext.prototype.rExpression = function() {
  return this.getTypedRuleContext(RExpressionContext,0);
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

ReturnContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitReturn(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function InvocationContext(parser, ctx) {
  RStatementContext.call(this, parser);
  RStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

InvocationContext.prototype = Object.create(RStatementContext.prototype);
InvocationContext.prototype.constructor = InvocationContext;

MiniParser.InvocationContext = InvocationContext;

InvocationContext.prototype.ID = function() {
  return this.getToken(MiniParser.ID, 0);
};

InvocationContext.prototype.rArguments = function() {
  return this.getTypedRuleContext(RArgumentsContext,0);
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

InvocationContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitInvocation(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function PrintLnContext(parser, ctx) {
  RStatementContext.call(this, parser);
  RStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

PrintLnContext.prototype = Object.create(RStatementContext.prototype);
PrintLnContext.prototype.constructor = PrintLnContext;

MiniParser.PrintLnContext = PrintLnContext;

PrintLnContext.prototype.rExpression = function() {
  return this.getTypedRuleContext(RExpressionContext,0);
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

PrintLnContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitPrintLn(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function ConditionalContext(parser, ctx) {
  RStatementContext.call(this, parser);
  this.thenBlock = null; // RBlockContext;
  this.elseBlock = null; // RBlockContext;
  RStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

ConditionalContext.prototype = Object.create(RStatementContext.prototype);
ConditionalContext.prototype.constructor = ConditionalContext;

MiniParser.ConditionalContext = ConditionalContext;

ConditionalContext.prototype.rExpression = function() {
  return this.getTypedRuleContext(RExpressionContext,0);
};

ConditionalContext.prototype.rBlock = function(i) {
  if(i===undefined) {
    i = null;
  }
  if(i===null) {
    return this.getTypedRuleContexts(RBlockContext);
  } else {
    return this.getTypedRuleContext(RBlockContext,i);
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

ConditionalContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitConditional(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function NestedBlockContext(parser, ctx) {
  RStatementContext.call(this, parser);
  RStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

NestedBlockContext.prototype = Object.create(RStatementContext.prototype);
NestedBlockContext.prototype.constructor = NestedBlockContext;

MiniParser.NestedBlockContext = NestedBlockContext;

NestedBlockContext.prototype.rBlock = function() {
  return this.getTypedRuleContext(RBlockContext,0);
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

NestedBlockContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitNestedBlock(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function WhileContext(parser, ctx) {
  RStatementContext.call(this, parser);
  RStatementContext.prototype.copyFrom.call(this, ctx);
  return this;
}

WhileContext.prototype = Object.create(RStatementContext.prototype);
WhileContext.prototype.constructor = WhileContext;

MiniParser.WhileContext = WhileContext;

WhileContext.prototype.rExpression = function() {
  return this.getTypedRuleContext(RExpressionContext,0);
};

WhileContext.prototype.rBlock = function() {
  return this.getTypedRuleContext(RBlockContext,0);
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

WhileContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitWhile(this);
  } else {
    return visitor.visitChildren(this);
  }
};



MiniParser.RStatementContext = RStatementContext;

MiniParser.prototype.rStatement = function() {

  var localctx = new RStatementContext(this, this._ctx, this.state);
  this.enterRule(localctx, 24, MiniParser.RULE_rStatement);
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
      this.rBlock();
      break;

    case 2:
      localctx = new AssignmentContext(this, localctx);
      this.enterOuterAlt(localctx, 2);
      this.state = 123;
      this.rLvalue(0);
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
        this.rExpression(0);
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
      this.rExpression(0);
      this.state = 133;
      this.match(MiniParser.T__3);
      break;

    case 4:
      localctx = new PrintLnContext(this, localctx);
      this.enterOuterAlt(localctx, 4);
      this.state = 135;
      this.match(MiniParser.T__13);
      this.state = 136;
      this.rExpression(0);
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
      this.rExpression(0);
      this.state = 143;
      this.match(MiniParser.T__9);
      this.state = 144;
      localctx.thenBlock = this.rBlock();
      this.state = 147;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if(_la===MiniParser.T__16) {
        this.state = 145;
        this.match(MiniParser.T__16);
        this.state = 146;
        localctx.elseBlock = this.rBlock();
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
      this.rExpression(0);
      this.state = 152;
      this.match(MiniParser.T__9);
      this.state = 153;
      this.rBlock();
      break;

    case 7:
      localctx = new DeleteContext(this, localctx);
      this.enterOuterAlt(localctx, 7);
      this.state = 155;
      this.match(MiniParser.T__18);
      this.state = 156;
      this.rExpression(0);
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
        this.rExpression(0);
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
      this.rArguments();
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

function RBlockContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rBlock;
  return this;
}

RBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RBlockContext.prototype.constructor = RBlockContext;

RBlockContext.prototype.rStatementList = function() {
  return this.getTypedRuleContext(RStatementListContext,0);
};

RBlockContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRBlock(this);
  }
};

RBlockContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRBlock(this);
  }
};

RBlockContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRBlock(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RBlockContext = RBlockContext;

MiniParser.prototype.rBlock = function() {

  var localctx = new RBlockContext(this, this._ctx, this.state);
  this.enterRule(localctx, 26, MiniParser.RULE_rBlock);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 172;
    this.match(MiniParser.T__1);
    this.state = 173;
    this.rStatementList();
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

function RStatementListContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rStatementList;
  return this;
}

RStatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RStatementListContext.prototype.constructor = RStatementListContext;

RStatementListContext.prototype.rStatement = function(i) {
  if(i===undefined) {
    i = null;
  }
  if(i===null) {
    return this.getTypedRuleContexts(RStatementContext);
  } else {
    return this.getTypedRuleContext(RStatementContext,i);
  }
};

RStatementListContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRStatementList(this);
  }
};

RStatementListContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRStatementList(this);
  }
};

RStatementListContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRStatementList(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RStatementListContext = RStatementListContext;

MiniParser.prototype.rStatementList = function() {

  var localctx = new RStatementListContext(this, this._ctx, this.state);
  this.enterRule(localctx, 28, MiniParser.RULE_rStatementList);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 179;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__1) | (1 << MiniParser.T__13) | (1 << MiniParser.T__15) | (1 << MiniParser.T__17) | (1 << MiniParser.T__18) | (1 << MiniParser.T__19))) !== 0) || _la===MiniParser.ID) {
      this.state = 176;
      this.rStatement();
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

function RLvalueContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rLvalue;
  return this;
}

RLvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RLvalueContext.prototype.constructor = RLvalueContext;


 
RLvalueContext.prototype.copyFrom = function(ctx) {
  antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function LvalueIdContext(parser, ctx) {
  RLvalueContext.call(this, parser);
  RLvalueContext.prototype.copyFrom.call(this, ctx);
  return this;
}

LvalueIdContext.prototype = Object.create(RLvalueContext.prototype);
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

LvalueIdContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitLvalueId(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function LvalueDotContext(parser, ctx) {
  RLvalueContext.call(this, parser);
  RLvalueContext.prototype.copyFrom.call(this, ctx);
  return this;
}

LvalueDotContext.prototype = Object.create(RLvalueContext.prototype);
LvalueDotContext.prototype.constructor = LvalueDotContext;

MiniParser.LvalueDotContext = LvalueDotContext;

LvalueDotContext.prototype.rLvalue = function() {
  return this.getTypedRuleContext(RLvalueContext,0);
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

LvalueDotContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitLvalueDot(this);
  } else {
    return visitor.visitChildren(this);
  }
};



MiniParser.prototype.rLvalue = function(_p) {
  if(_p===undefined) {
    _p = 0;
  }
  var _parentctx = this._ctx;
  var _parentState = this.state;
  var localctx = new RLvalueContext(this, this._ctx, _parentState);
  var _prevctx = localctx;
  var _startState = 30;
  this.enterRecursionRule(localctx, 30, MiniParser.RULE_rLvalue, _p);
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
    var _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
      if(_alt===1) {
        if(this._parseListeners!==null) {
          this.triggerExitRuleEvent();
        }
        _prevctx = localctx;
        localctx = new LvalueDotContext(this, new RLvalueContext(this, _parentctx, _parentState));
        this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_rLvalue);
        this.state = 185;
        if (!( this.precpred(this._ctx, 1))) {
          throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 1)');
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
    this.unrollRecursionContexts(_parentctx);
  }
  return localctx;
};

function RExpressionContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rExpression;
  return this;
}

RExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RExpressionContext.prototype.constructor = RExpressionContext;


 
RExpressionContext.prototype.copyFrom = function(ctx) {
  antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function IntegerExprContext(parser, ctx) {
  RExpressionContext.call(this, parser);
  RExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

IntegerExprContext.prototype = Object.create(RExpressionContext.prototype);
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

IntegerExprContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitIntegerExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function TrueExprContext(parser, ctx) {
  RExpressionContext.call(this, parser);
  RExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

TrueExprContext.prototype = Object.create(RExpressionContext.prototype);
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

TrueExprContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitTrueExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function IdentifierExprContext(parser, ctx) {
  RExpressionContext.call(this, parser);
  RExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

IdentifierExprContext.prototype = Object.create(RExpressionContext.prototype);
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

IdentifierExprContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitIdentifierExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function BinaryExprContext(parser, ctx) {
  RExpressionContext.call(this, parser);
  this.lft = null; // RExpressionContext;
  this.op = null; // Token;
  this.rht = null; // RExpressionContext;
  RExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

BinaryExprContext.prototype = Object.create(RExpressionContext.prototype);
BinaryExprContext.prototype.constructor = BinaryExprContext;

MiniParser.BinaryExprContext = BinaryExprContext;

BinaryExprContext.prototype.rExpression = function(i) {
  if(i===undefined) {
    i = null;
  }
  if(i===null) {
    return this.getTypedRuleContexts(RExpressionContext);
  } else {
    return this.getTypedRuleContext(RExpressionContext,i);
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

BinaryExprContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitBinaryExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function NewExprContext(parser, ctx) {
  RExpressionContext.call(this, parser);
  RExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

NewExprContext.prototype = Object.create(RExpressionContext.prototype);
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

NewExprContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitNewExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function NestedExprContext(parser, ctx) {
  RExpressionContext.call(this, parser);
  RExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

NestedExprContext.prototype = Object.create(RExpressionContext.prototype);
NestedExprContext.prototype.constructor = NestedExprContext;

MiniParser.NestedExprContext = NestedExprContext;

NestedExprContext.prototype.rExpression = function() {
  return this.getTypedRuleContext(RExpressionContext,0);
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

NestedExprContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitNestedExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function DotExprContext(parser, ctx) {
  RExpressionContext.call(this, parser);
  RExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

DotExprContext.prototype = Object.create(RExpressionContext.prototype);
DotExprContext.prototype.constructor = DotExprContext;

MiniParser.DotExprContext = DotExprContext;

DotExprContext.prototype.rExpression = function() {
  return this.getTypedRuleContext(RExpressionContext,0);
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

DotExprContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitDotExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function UnaryExprContext(parser, ctx) {
  RExpressionContext.call(this, parser);
  this.op = null; // Token;
  RExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

UnaryExprContext.prototype = Object.create(RExpressionContext.prototype);
UnaryExprContext.prototype.constructor = UnaryExprContext;

MiniParser.UnaryExprContext = UnaryExprContext;

UnaryExprContext.prototype.rExpression = function() {
  return this.getTypedRuleContext(RExpressionContext,0);
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

UnaryExprContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitUnaryExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function InvocationExprContext(parser, ctx) {
  RExpressionContext.call(this, parser);
  RExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

InvocationExprContext.prototype = Object.create(RExpressionContext.prototype);
InvocationExprContext.prototype.constructor = InvocationExprContext;

MiniParser.InvocationExprContext = InvocationExprContext;

InvocationExprContext.prototype.ID = function() {
  return this.getToken(MiniParser.ID, 0);
};

InvocationExprContext.prototype.rArguments = function() {
  return this.getTypedRuleContext(RArgumentsContext,0);
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

InvocationExprContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitInvocationExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function FalseExprContext(parser, ctx) {
  RExpressionContext.call(this, parser);
  RExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

FalseExprContext.prototype = Object.create(RExpressionContext.prototype);
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

FalseExprContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitFalseExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};


function NullExprContext(parser, ctx) {
  RExpressionContext.call(this, parser);
  RExpressionContext.prototype.copyFrom.call(this, ctx);
  return this;
}

NullExprContext.prototype = Object.create(RExpressionContext.prototype);
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

NullExprContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitNullExpr(this);
  } else {
    return visitor.visitChildren(this);
  }
};



MiniParser.prototype.rExpression = function(_p) {
  if(_p===undefined) {
    _p = 0;
  }
  var _parentctx = this._ctx;
  var _parentState = this.state;
  var localctx = new RExpressionContext(this, this._ctx, _parentState);
  var _prevctx = localctx;
  var _startState = 32;
  this.enterRecursionRule(localctx, 32, MiniParser.RULE_rExpression, _p);
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
      this.rArguments();
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
      this.rExpression(14);
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
      this.rExpression(0);
      this.state = 210;
      this.match(MiniParser.T__9);
      break;

    }
    this._ctx.stop = this._input.LT(-1);
    this.state = 237;
    this._errHandler.sync(this);
    var _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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
          localctx = new BinaryExprContext(this, new RExpressionContext(this, _parentctx, _parentState));
          localctx.lft = _prevctx;
          this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_rExpression);
          this.state = 214;
          if (!( this.precpred(this._ctx, 13))) {
            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 13)');
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
          localctx.rht = this.rExpression(14);
          break;

        case 2:
          localctx = new BinaryExprContext(this, new RExpressionContext(this, _parentctx, _parentState));
          localctx.lft = _prevctx;
          this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_rExpression);
          this.state = 217;
          if (!( this.precpred(this._ctx, 12))) {
            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 12)');
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
          localctx.rht = this.rExpression(13);
          break;

        case 3:
          localctx = new BinaryExprContext(this, new RExpressionContext(this, _parentctx, _parentState));
          localctx.lft = _prevctx;
          this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_rExpression);
          this.state = 220;
          if (!( this.precpred(this._ctx, 11))) {
            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 11)');
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
          localctx.rht = this.rExpression(12);
          break;

        case 4:
          localctx = new BinaryExprContext(this, new RExpressionContext(this, _parentctx, _parentState));
          localctx.lft = _prevctx;
          this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_rExpression);
          this.state = 223;
          if (!( this.precpred(this._ctx, 10))) {
            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 10)');
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
          localctx.rht = this.rExpression(11);
          break;

        case 5:
          localctx = new BinaryExprContext(this, new RExpressionContext(this, _parentctx, _parentState));
          localctx.lft = _prevctx;
          this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_rExpression);
          this.state = 226;
          if (!( this.precpred(this._ctx, 9))) {
            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 9)');
          }
          this.state = 227;
          localctx.op = this.match(MiniParser.T__32);
          this.state = 228;
          localctx.rht = this.rExpression(10);
          break;

        case 6:
          localctx = new BinaryExprContext(this, new RExpressionContext(this, _parentctx, _parentState));
          localctx.lft = _prevctx;
          this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_rExpression);
          this.state = 229;
          if (!( this.precpred(this._ctx, 8))) {
            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 8)');
          }
          this.state = 230;
          localctx.op = this.match(MiniParser.T__33);
          this.state = 231;
          localctx.rht = this.rExpression(9);
          break;

        case 7:
          localctx = new DotExprContext(this, new RExpressionContext(this, _parentctx, _parentState));
          this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_rExpression);
          this.state = 232;
          if (!( this.precpred(this._ctx, 15))) {
            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 15)');
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
    this.unrollRecursionContexts(_parentctx);
  }
  return localctx;
};

function RArgumentsContext(parser, parent, invokingState) {
  if(parent===undefined) {
    parent = null;
  }
  if(invokingState===undefined || invokingState===null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MiniParser.RULE_rArguments;
  return this;
}

RArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RArgumentsContext.prototype.constructor = RArgumentsContext;

RArgumentsContext.prototype.rExpression = function(i) {
  if(i===undefined) {
    i = null;
  }
  if(i===null) {
    return this.getTypedRuleContexts(RExpressionContext);
  } else {
    return this.getTypedRuleContext(RExpressionContext,i);
  }
};

RArgumentsContext.prototype.enterRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.enterRArguments(this);
  }
};

RArgumentsContext.prototype.exitRule = function(listener) {
  if(listener instanceof MiniListener ) {
    listener.exitRArguments(this);
  }
};

RArgumentsContext.prototype.accept = function(visitor) {
  if ( visitor instanceof MiniVisitor ) {
    return visitor.visitRArguments(this);
  } else {
    return visitor.visitChildren(this);
  }
};




MiniParser.RArgumentsContext = RArgumentsContext;

MiniParser.prototype.rArguments = function() {

  var localctx = new RArgumentsContext(this, this._ctx, this.state);
  this.enterRule(localctx, 34, MiniParser.RULE_rArguments);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 248;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if(((((_la - 9)) & ~0x1f) == 0 && ((1 << (_la - 9)) & ((1 << (MiniParser.T__8 - 9)) | (1 << (MiniParser.T__21 - 9)) | (1 << (MiniParser.T__22 - 9)) | (1 << (MiniParser.T__34 - 9)) | (1 << (MiniParser.T__35 - 9)) | (1 << (MiniParser.T__36 - 9)) | (1 << (MiniParser.T__37 - 9)) | (1 << (MiniParser.ID - 9)) | (1 << (MiniParser.INTEGER - 9)))) !== 0)) {
      this.state = 240;
      this.rExpression(0);
      this.state = 245;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while(_la===MiniParser.T__6) {
        this.state = 241;
        this.match(MiniParser.T__6);
        this.state = 242;
        this.rExpression(0);
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
    return this.rLvalue_sempred(localctx, predIndex);
  case 16:
    return this.rExpression_sempred(localctx, predIndex);
  default:
    throw 'No predicate with index:' + ruleIndex;
  }
};

MiniParser.prototype.rLvalue_sempred = function(localctx, predIndex) {
  switch(predIndex) {
  case 0:
    return this.precpred(this._ctx, 1);
  default:
    throw 'No predicate with index:' + predIndex;
  }
};

MiniParser.prototype.rExpression_sempred = function(localctx, predIndex) {
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
    throw 'No predicate with index:' + predIndex;
  }
};


exports.MiniParser = MiniParser;
