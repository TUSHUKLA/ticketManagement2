sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/m/Label',
    'sap/ui/comp/smartvariants/PersonalizableInfo'
],
function (Controller,JSONModel, MessageToast,Fragment,Filter,FilterOperator,Label,PersonalizableInfo) {
    "use strict";

    return Controller.extend("com.tushar.project2.controller.View2", {
        onInit: function () {

            const tickets = [ 
                {
                "status": "resolved",
                "ticketid" : "0001",
                "creationdate":  "2024-06-01",
                "createdby": "Girish",
                "priority": "high",
                "assignedto": "Cofforge"

            },
            {
                "status": "resolved",
                "ticketid" : "0002",
                "creationdate":"2024-06-05",
                "createdby": "Manish",
                "priority": "medium",
                "assignedto": "Bluejay"

            },
            {
                "status": "resolved",
                "ticketid" : "0003",
                "creationdate": "2024-06-01",
                "createdby": "Parnika",
                "priority": " verry high",
                "assignedto": "Aricord"

            },
            {
                "status": "resolved",
                "ticketid" : "0004",
                "creationdate": "2024-06-08",
                "createdby": "Ajay",
                "priority": "medium",
                "assignedto": "Persistant"

            },
            {
                "status": "resolved",
                "ticketid" : "0005",
                "creationdate": "2024-06-10",
                "createdby": "Tushar",
                "priority": "high",
                "assignedto": "Aricord"

            },
            {
                "status": "resolved",
                "ticketid" : "0006",
                "creationdate": "2024-06-10",
                "createdby": "Manish",
                "priority": "low",
                "assignedto": "Persistant"

            },
            {
                "status": "resolved",
                "ticketid" : "0007",
                "creationdate": "2024-06-01",
                "createdby": "Tushar",
                "priority": "medium",
                "assignedto": "Cofforge"

            },
            {
                "status": "resolved",
                "ticketid" : "0008",
                "creationdate": "2024-06-01",
                "createdby": "Ajay",
                "priority": "verry high",
                "assignedto": "TCS"

            },
            {
                "status": "resolved",
                "ticketid" : "0009",
                "creationdate": "2024-06-01",
                "createdby": "Manish",
                "priority": "verry low",
                "assignedto": "TCS"

            },
            {
                "status": "resolved",
                "ticketid" : "0010",
                "creationdate": "2024-06-01",
                "createdby": "Parnika",
                "priority": "high",
                "assignedto": "Bluejay"

            }
            ]
            
            const oModel = new JSONModel();
			oModel.setData(tickets);
			this.getView().setModel(oModel,"T");
            
           

			/*
			this.oSmartVariantManagement = this.getView().byId("svm");
			this.oExpandedLabel = this.getView().byId("expandedLabel");
			this.oSnappedLabel = this.getView().byId("snappedLabel");
			this.oFilterBar = this.getView().byId("filterbar");
			this.oTable = this.getView().byId("table");

			this.oFilterBar.registerFetchData(this.fetchData);
			this.oFilterBar.registerApplyData(this.applyData);
			this.oFilterBar.registerGetFiltersWithValues(this.getFiltersWithValues);

			var oPersInfo = new PersonalizableInfo({
				type: "filterBar",
				keyName: "persistencyKey",
				dataSource: "",
				control: this.oFilterBar
			});
			this.oSmartVariantManagement.addPersonalizableControl(oPersInfo);
			this.oSmartVariantManagement.initialise(function () {}, this.oFilterBar);
			*/

        },

        onValueHelpRequestid: function (oEvent) {
			var sInputValue = oEvent.getSource().getValue(),
				oView = this.getView();

			if (!this._psuggest) {
				this._psuggest = Fragment.load({
					id: oView.getId(),
					name: "com.tushar.project2.view.suggest",
					controller: this
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
			this._psuggest.then(function(oDialog) {
				// Create a filter for the binding
				//oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue)]);
				// Open ValueHelpDialog filtered by the input's value
				oDialog.open();
			});
		},

		onValueHelpSearch: function (oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Name", FilterOperator.Contains, sValue);

			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		onValueHelpClose: function (oEvent) {
			var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) {
				return;
			}

			this.byId("TI").setValue(oSelectedItem.getTitle());

       
        },

        onValueHelpRequestassign: function (oEvent) {
			var sInputValue2 = oEvent.getSource().getValue(),
				oView = this.getView();

			if (!this._psuggestassign) {
				this._psuggestassign = Fragment.load({
					id: oView.getId(),
					name: "com.tushar.project2.view.suggestassign",
					controller: this
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
			this._psuggestassign.then(function(oDialog) 
            {
				// Create a filter for the binding
				//oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue2)]);
				// Open ValueHelpDialog filtered by the input's value
				oDialog.open();
			});
		},

		onValueHelpSearchassign: function (oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Name", FilterOperator.Contains, sValue);

			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		onValueHelpCloseassign: function (oEvent) {
			var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) {
				return;
			}

			this.byId("AT").setValue(oSelectedItem.getTitle());

       
        }, 
        
        onValueHelpRequestcreate: function (oEvent) {
			var sInputValue1 = oEvent.getSource().getValue(),
				oView = this.getView();

			if (!this._psuggestcreate) {
				this._psuggestcreate = Fragment.load({
					id: oView.getId(),
					name: "com.tushar.project2.view.suggestcreate",
					controller: this
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
			this._psuggestcreate.then(function(oDialog) 
            {
				// Create a filter for the binding
				//oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue1)]);
				// Open ValueHelpDialog filtered by the input's value
				oDialog.open();
			});
		},

		onValueHelpSearchcreate: function (oEvent) 
        {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Name", FilterOperator.Contains, sValue);

			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		onValueHelpClosecreate: function (oEvent)
         {
			var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) 
            {
				return;
			}

			this.byId("CB").setValue(oSelectedItem.getTitle());

       
        },

        onExit: function() {
			this.oModel = null;
			this.oSmartVariantManagement = null;
			this.oExpandedLabel = null;
			this.oSnappedLabel = null;
			this.oFilterBar = null;
			this.oTable = null;
		},

        fetchData: function () {
			var aData = this.oFilterBar.getAllFilterItems().reduce(function (aResult, oFilterItem) {
				aResult.push({
					groupName: oFilterItem.getGroupName(),
					fieldName: oFilterItem.getName(),
					fieldData: oFilterItem.getControl().getSelectedKeys()
				});

				return aResult;
			}, []);

			return aData;
		},

		applyData: function (aData) {
			aData.forEach(function (oDataObject) {
				var oControl = this.oFilterBar.determineControlByName(oDataObject.fieldName, oDataObject.groupName);
				oControl.setSelectedKeys(oDataObject.fieldData);
			}, this);
		},

		getFiltersWithValues: function () {
			var aFiltersWithValue = this.oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {
				var oControl = oFilterGroupItem.getControl();

				if (oControl && oControl.getSelectedKeys && oControl.getSelectedKeys().length > 0) {
					aResult.push(oFilterGroupItem);
				}

				return aResult;
			}, []);

			return aFiltersWithValue;
		},

		onSelectionChange: function (oEvent) {
			this.oSmartVariantManagement.currentVariantSetModified(true);
			this.oFilterBar.fireFilterChange(oEvent);
		},

		onSearch: function () {
			/*
			var aTableFilters = this.oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {
				var oControl = oFilterGroupItem.getControl(),
					aSelectedKeys = oControl.getSelectedKeys(),
					aFilters = aSelectedKeys.map(function (sSelectedKey) {
						return new Filter({
							path: oFilterGroupItem.getName(),
							operator: FilterOperator.Contains,
							value1: sSelectedKey
						});
					});

				if (aSelectedKeys.length > 0) {
					aResult.push(new Filter({
						filters: aFilters,
						and: false
					}));
				}

				return aResult;
			}, []);
			*/

			// let f  = new Filter([
			// 	new Filter("ticketid", FilterOperator.Contains, ticketID),
			// 	new Filter("status", FilterOperator.Contains, status)
			// ], false);

			//Step 1, capture user inpt
			let ticketID = this.getView().byId("TI").getValue();

			//Stpe 2:- prepare filter array
			const oFiler = new Filter({
				path: 'ticketid',
				operator: FilterOperator.EQ, //Contains
				value1: ticketID
			});

			const aFilter = new Filter([oFiler], true);

			if(ticketID) {
				this.getView().byId("table").getBinding("rows").filter(aFilter);
			} else {
				this.byId("table").getBinding("rows").filter(null);
			}
			
		},

		onFilterChange: function () {
			this._updateLabelsAndTable();
		},

		onAfterVariantLoad: function () {
			this._updateLabelsAndTable();
		},

		getFormattedSummaryText: function() {
			var aFiltersWithValues = this.oFilterBar.retrieveFiltersWithValues();

			if (aFiltersWithValues.length === 0) {
				return "No filters active";
			}

			if (aFiltersWithValues.length === 1) {
				return aFiltersWithValues.length + " filter active: " + aFiltersWithValues.join(", ");
			}

			return aFiltersWithValues.length + " filters active: " + aFiltersWithValues.join(", ");
		},

		getFormattedSummaryTextExpanded: function() {
			var aFiltersWithValues = this.oFilterBar.retrieveFiltersWithValues();

			if (aFiltersWithValues.length === 0) {
				return "No filters active";
			}

			var sText = aFiltersWithValues.length + " filters active",
				aNonVisibleFiltersWithValues = this.oFilterBar.retrieveNonVisibleFiltersWithValues();

			if (aFiltersWithValues.length === 1) {
				sText = aFiltersWithValues.length + " filter active";
			}

			if (aNonVisibleFiltersWithValues && aNonVisibleFiltersWithValues.length > 0) {
				sText += " (" + aNonVisibleFiltersWithValues.length + " hidden)";
			}

			return sText;
		},

		_updateLabelsAndTable: function () {
			this.oExpandedLabel.setText(this.getFormattedSummaryTextExpanded());
			this.oSnappedLabel.setText(this.getFormattedSummaryText());
			this.oTable.setShowOverlay(true);
		}
       
    });
});
