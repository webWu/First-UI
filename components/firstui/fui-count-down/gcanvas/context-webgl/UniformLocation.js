// 本文件由FirstUI授权予江苏络思物联科技有限公司（手机号：  1  36  215 17 1 9 9，身份证尾号：KYGW4C）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLUniformLocation';

function uuid(id) {
    return getTransferedObjectUUID(name, id);
}

export default class WebGLUniformLocation {
    className = name;

    constructor(id, type) {
        this.id = id;
        this.type = type;
    }

    static uuid = uuid;

    uuid() {
        return uuid(this.id);
    }
}