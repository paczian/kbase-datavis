requirejs.config({
    baseUrl: "/js",
    paths: {
        columnfilter: "DataTables/extras/ColumnFilterWidgets",
        datatables:   "jquery.dataTables",
    },
    shim: {
        jquery:      { exports: ["$", "jQuery"] },
        d3:          { exports: "d3"          },
        underscore:  { exports: "_"           },
        colorbrewer: { exports: "colorbrewer" },
        backbone:    { exports: "Backbone", deps: [ "underscore", "jquery" ] },
        "backbone.localstorage": {
            exports: "Backbone",
            deps: [ "backbone" ]
        },
        datatables: {
            deps: [ "jquery" ],
            exports: "jQuery.fn.dataTableExt"
        },
        columnfilter: {
            deps: [ "datatables" ]
        },
        'util/spin':  { exports: "Spinner" }
    },
})
