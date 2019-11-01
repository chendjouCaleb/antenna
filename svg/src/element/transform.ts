import {ArrayHelpers} from "../helpers/array.helpers";

export class Transform {
    private _transforms = new Map<string, any>();

    setIfNotExists(name: string, value){
        if(!this._transforms.has(name)){
            this._transforms.set(name, value);
        }
    }


    public translateX(x: number) {
        this.setIfNotExists("translate", [0, 0]);
        this._transforms.get("translate")[0] = x;
    }

    public translateY(y: number) {
        this.setIfNotExists("translate", [0, 0]);
        this._transforms.get("translate")[1] = y;
    }

    public translate(x: number) {
        this._transforms.set("translate", [x, x]);
    }

    public rotate(angle: number) {
        this.setIfNotExists("rotate", [0]);
        this._transforms.get("rotate")[0] = angle;
    }


    public scaleX(x: number) {
        this.setIfNotExists("scale", [0, 0]);
        this._transforms.get("scale")[0] = x;
    }

    public scaleY(y: number) {
        this.setIfNotExists("scale", [0, 0]);
        this._transforms.get("scale")[1] = y;
    }

    public scale(x: number) {
        this._transforms.set("scale", [x, x]);
    }


    toAttribute() {
        let str = "";

        this._transforms.forEach(((value, key, map) => {
            if(!ArrayHelpers.allHaveValue(value, 0)){
                str+= " " +  key + this.tupleStr(value);
            }
        }));

        return str.trim();
    }

    tupleStr(v: number[] = []) {
        if(v.length == 0){
            return null;
        }
        if(ArrayHelpers.haveOneValue(v)){
            return `(${v[0]})`
        }

        for(let i =1;i < v.length; i++){

        }
        let str = "(";

        for (let i = 0; i < v.length; i++) {
            str += v[i] + ",";
        }

        str = str.substring(0, str.length -1);
        str +=")";
        return str;
    }
}