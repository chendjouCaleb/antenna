import {GridSvg} from "../grid";

describe("svg grid", () => {
    test("construct", () => {

        let grid = new GridSvg();
        expect(grid.objectType()).toBe("grid");
        expect(grid.id).toBe(1);

        expect(grid.host.tagName).toBe("svg");


        expect(grid.xGridHost.tagName).toBe("svg");
        expect(grid.xGridHost.getAttribute("height")).toBe("100%");
        expect(grid.xGridHost.getAttribute("width")).toBe("100%");

        expect(grid.yGridHost.tagName).toBe("svg");
        expect(grid.yGridHost.getAttribute("height")).toBe("100%");
        expect(grid.yGridHost.getAttribute("width")).toBe("100%");

        expect(grid.yGridHost.parentElement).toBe(grid.host);
        expect(grid.xGridHost.parentElement).toBe(grid.host);
    });

    test("set domain", () => {
        let grid = new GridSvg();

        grid.xDomain = [10, 100];
        grid.yDomain = [20, 80];

        expect(grid.xDomain).toStrictEqual([10, 100]);
        expect(grid.yDomain).toStrictEqual([20, 80]);

        expect(grid.host.getAttribute("x")).toBe("10");
        expect(grid.host.getAttribute("y")).toBe("20");

        expect(grid.host.getAttribute("width")).toBe("90");
        expect(grid.host.getAttribute("height")).toBe("60");
    });

    test("create XLine", () => {
        let grid = new GridSvg();

        let space = 2;
        let domain: [number, number] = [-2, 8];
        const width = domain[1] - domain[0];
        let lines = grid.createXLine(domain, width, space);

        expect(lines.length).toBe(6);

        for(let j = 0, i = 0; j < width; j+=space, i++){
            let line = lines[i];
            expect(line.host.getAttribute("x1")).toBe(`${0}`);
            expect(line.host.getAttribute("y1")).toBe(`${j}`);

            expect(line.host.getAttribute("x2")).toBe(`${width}`);
            expect(line.host.getAttribute("y2")).toBe(`${j}`);
        }
    });


    test("create YLine", () => {
        let grid = new GridSvg();

        let domain: [number, number] = [-2, 8];
        let height = domain[1] - domain[0];
        let space = 2;
        let lines = grid.createYLine(domain, height, space);

        expect(lines.length).toBe(6);

        for(let j = 0, i = 0; j < height; j += space, i++){
            let line = lines[i];
            expect(line.host.getAttribute("x1")).toBe(`${j}`);
            expect(line.host.getAttribute("y1")).toBe(`${0}`);

            expect(line.host.getAttribute("x2")).toBe(`${j}`);
            expect(line.host.getAttribute("y2")).toBe(`${height}`);
        }
    });

    test("update grid", () => {
        let grid = new GridSvg();
        grid.strokeColor = "#EEE";
        grid.strokeWidth = 2;
        grid.dasharray = "1, 2";

        let yDomain: [number, number] = [0, 4];
        let xDomain: [number, number] = [-2, 11];
        let space = 3;

        let width = xDomain[1] - xDomain[0];
        let height = yDomain[1] - yDomain[0];

        grid.updateGrid(xDomain, yDomain, space);

        expect(grid.xDomain).toStrictEqual(xDomain);
        expect(grid.yDomain).toStrictEqual(yDomain);
        expect(grid.space).toStrictEqual(space);
        expect(grid.x).toBe(xDomain[0]);
        expect(grid.y).toBe(yDomain[0]);

        expect(grid.width).toBe(width);
        expect(grid.host.getAttribute("width")).toBe(`${width}`);
        expect(grid.host.getAttribute("x")).toBe(`${xDomain[0]}`);

        expect(grid.height).toBe(height);
        expect(grid.host.getAttribute("height")).toBe(`${height}`);
        expect(grid.host.getAttribute("y")).toBe(`${yDomain[0]}`);

        expect(grid.yLines().length).toBe(5);
        expect(grid.xLines().length).toBe(2);

        for(let j = 0, i = 0; j < height; j+= space, i++){
            let line = grid.xLines()[i];
            expect(line.host.getAttribute("x1")).toBe(`${0}`);
            expect(line.host.getAttribute("y1")).toBe(`${j}`);

            expect(line.host.getAttribute("x2")).toBe(`${width}`);
            expect(line.host.getAttribute("y2")).toBe(`${j}`);

            expect(line.host.parentElement).toBe(grid.xGridHost);
        }

        for(let j = 0, i = 0; j < width; j += space, i++){
            let line = grid.yLines()[i];
            expect(line.host.getAttribute("x1")).toBe(`${j}`);
            expect(line.host.getAttribute("y1")).toBe(`${0}`);

            expect(line.host.getAttribute("x2")).toBe(`${j}`);
            expect(line.host.getAttribute("y2")).toBe(`${height}`);

            expect(line.host.parentElement).toBe(grid.yGridHost);
        }

        let lines = grid.xLines().concat(grid.yLines());

        lines.forEach(line => {
            expect(line.dash).toBe(grid.dasharray);
            expect(line.strokeColor).toBe(grid.strokeColor);
            expect(line.strokeWidth).toBe(grid.strokeWidth);
        });
    });

    test("set space", () => {
       let grid = new GridSvg();
       grid.space = 2;
       expect(grid.space).toBe(2);

    });

    
    test("set stroke width", () => {
        let grid = new GridSvg();
        grid.xDomain = [0, 10];
        grid.yDomain = [0, 10];
        
        grid.strokeWidth = 10;
        grid.strokeColor = "#EEE";
        grid.dasharray = "1, 2";

        grid.xLines().concat(grid.yLines()).forEach(line => {
            line.dash = grid.dasharray;
            line.strokeColor = grid.strokeColor;
            line.strokeWidth = grid.strokeWidth;
        });
    })
});