/*!
 *  @kobalab/majiang-core v1.2.1
 *
 *  Copyright(C) 2021 Satoshi Kobayashi
 *  Released under the MIT license
 *  https://github.com/kobalab/majiang-core/blob/master/LICENSE
 */

import rule from "./rule.js";
import Shoupai from "./shoupai.js";
import Shan from "./shan.js";
import He from "./he.js";
import Board from "./board.js";
import Game from "./game.js";
import Player from "./player.js";
import xiangting from "./xiangting.js";
import hule from "./hule.js";

export default {
    rule,
    Shoupai,
    Shan,
    He,
    Board,
    Game,
    Player,
    Util: {
        ...xiangting,
        ...hule
    },
}
