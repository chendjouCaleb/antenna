import {GridSvg} from "../grid";

describe("svg grid", () => {
    test("construct", () => {

        let grid = new GridSvg();
        expect(grid.objectType()).toBe("grid");
        expect(grid.id).toBe(1);

        expect(grid.host.tagName).toBe("svg");


        expect(grid.hGridHost.tagName).toBe("svg");
        expect(grid.hGridHost.getAttribute("height")).toBe("100%");
        expect(grid.hGridHost.getAttribute("width")).toBe("100%");

        expect(grid.vGridHost.tagName).toBe("svg");
        expect(grid.vGridHost.getAttribute("height")).toBe("100%");
        expect(grid.vGridHost.getAttribute("width")).toBe("100%");

        expect(grid.vGridHost.parentElement).toBe(grid.host);
        expect(grid.hGridHost.parentElement).toBe(grid.host);
    });

    test("set domain", () => {
        let grid = new GridSvg();

        grid.hDomain = [10, 100];
        grid.vDomain = [20, 80];

        expect(grid.hDomain).toStrictEqual([10, 100]);
        expect(grid.vDomain).toStrictEqual([20, 80]);

        expect(grid.host.getAttribute("x")).toBe("10");
        expect(grid.host.getAttribute("y")).toBe("20");

        expect(grid.host.getAttribute("width")).toBe("90");
        expect(grid.host.getAttribute("height")).toBe("60");
    });

    test("set hLine", () => {
        let grid = new GridSvg();

        grid.setHLine([10, 110], 10);

        expect(grid.hLines().length).toBe(11);
        for (let i = 0; i < grid.hLines().length; i++) {
            let line = grid.hLines()[i];
            expect(line.start.x).toBe(0);
            expect(line.end.x).toBe(100);

            expect(line.start.y).toBe(i * 10);
            expect(line.end.y).toBe(i * 10);

            expect(line.host.parentElement).toBe(grid.hGridHost);
        }

        expect(grid.hGridHost.children.length).toBe(11);
        expect(grid.host.getAttribute("width")).toBe("100");
        expect(grid.host.getAttribute("x")).toBe("10");


    });


    test("set vLine", () => {
        let grid = new GridSvg();

        grid.setVLine([10, 110], 10);

        expect(grid.vLines().length).toBe(11);
        for (let i = 0; i < grid.vLines().length; i++) {
            let line = grid.vLines()[i];
            expect(line.start.y).toBe(0);
            expect(line.end.y).toBe(100);

            expect(line.start.x).toBe(i * 10);
            expect(line.end.x).toBe(i * 10);
            expect(line.host.parentElement).toBe(grid.vGridHost);
        }

        expect(grid.vGridHost.children.length).toBe(11);
        expect(grid.host.getAttribute("height")).toBe("100");
        expect(grid.host.getAttribute("y")).toBe("10");
    });
    
    test("set stroke width", () => {
        let grid = new GridSvg();
        grid.setVLine([10, 110], 10);
        
        grid.strokeWidth = 10;
        grid.strokeColor = "#EEE";
        grid.dasharray = "1, 2";
        
        grid.vLines().forEach(line => {
            
        })
    })
});