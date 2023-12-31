var Debugger;
(function (Debugger) {
    var ManagedMemoryAnalyzer;
    (function (ManagedMemoryAnalyzer) {
        (function (CodeTokenCategory) {
            CodeTokenCategory[CodeTokenCategory["Type"] = 0] = "Type";
            CodeTokenCategory[CodeTokenCategory["Field"] = 1] = "Field";
        })(ManagedMemoryAnalyzer.CodeTokenCategory || (ManagedMemoryAnalyzer.CodeTokenCategory = {}));
        var CodeTokenCategory = ManagedMemoryAnalyzer.CodeTokenCategory;
        (function (ContextMenuType) {
            ContextMenuType[ContextMenuType["First"] = 0] = "First";
            ContextMenuType[ContextMenuType["Types"] = 0] = "Types";
            ContextMenuType[ContextMenuType["Objects"] = 1] = "Objects";
            ContextMenuType[ContextMenuType["BackwardRefGraph"] = 2] = "BackwardRefGraph";
            ContextMenuType[ContextMenuType["ForwardRefGraph"] = 3] = "ForwardRefGraph";
            ContextMenuType[ContextMenuType["BackwardTypesRefGraph"] = 4] = "BackwardTypesRefGraph";
            ContextMenuType[ContextMenuType["ForwardTypesRefGraph"] = 5] = "ForwardTypesRefGraph";
            ContextMenuType[ContextMenuType["AllocationCallStack"] = 6] = "AllocationCallStack";
            ContextMenuType[ContextMenuType["AggregatedCallStacks"] = 7] = "AggregatedCallStacks";
            ContextMenuType[ContextMenuType["AllocationList"] = 8] = "AllocationList";
            ContextMenuType[ContextMenuType["Last"] = 8] = "Last";
        })(ManagedMemoryAnalyzer.ContextMenuType || (ManagedMemoryAnalyzer.ContextMenuType = {}));
        var ContextMenuType = ManagedMemoryAnalyzer.ContextMenuType;
        (function (ContextMenuItem) {
            ContextMenuItem[ContextMenuItem["Copy"] = 0] = "Copy";
            ContextMenuItem[ContextMenuItem["Separator1"] = 1] = "Separator1";
            ContextMenuItem[ContextMenuItem["AddWatch"] = 2] = "AddWatch";
            ContextMenuItem[ContextMenuItem["QuickWatch"] = 3] = "QuickWatch";
            ContextMenuItem[ContextMenuItem["ViewInstances"] = 4] = "ViewInstances";
            ContextMenuItem[ContextMenuItem["Separator2"] = 5] = "Separator2";
            ContextMenuItem[ContextMenuItem["GoToDefinition"] = 6] = "GoToDefinition";
            ContextMenuItem[ContextMenuItem["FindAllReferences"] = 7] = "FindAllReferences";
            ContextMenuItem[ContextMenuItem["GotoSource"] = 8] = "GotoSource";
        })(ManagedMemoryAnalyzer.ContextMenuItem || (ManagedMemoryAnalyzer.ContextMenuItem = {}));
        var ContextMenuItem = ManagedMemoryAnalyzer.ContextMenuItem;
        (function (DebuggerMode) {
            DebuggerMode[DebuggerMode["Attached"] = 0] = "Attached";
            DebuggerMode[DebuggerMode["Running"] = 1] = "Running";
            DebuggerMode[DebuggerMode["Broken"] = 2] = "Broken";
            DebuggerMode[DebuggerMode["Detached"] = 3] = "Detached";
        })(ManagedMemoryAnalyzer.DebuggerMode || (ManagedMemoryAnalyzer.DebuggerMode = {}));
        var DebuggerMode = ManagedMemoryAnalyzer.DebuggerMode;
        (function (DiffResult) {
            DiffResult[DiffResult["SUCCESS"] = 0] = "SUCCESS";
            DiffResult[DiffResult["FAILURE"] = 1] = "FAILURE";
        })(ManagedMemoryAnalyzer.DiffResult || (ManagedMemoryAnalyzer.DiffResult = {}));
        var DiffResult = ManagedMemoryAnalyzer.DiffResult;
        (function (FeatureState) {
            FeatureState[FeatureState["NotAvailable"] = 0] = "NotAvailable";
            FeatureState[FeatureState["Disabled"] = 1] = "Disabled";
            FeatureState[FeatureState["Enabled"] = 2] = "Enabled";
        })(ManagedMemoryAnalyzer.FeatureState || (ManagedMemoryAnalyzer.FeatureState = {}));
        var FeatureState = ManagedMemoryAnalyzer.FeatureState;
        (function (Key_Presses) {
            Key_Presses[Key_Presses["ENTER"] = 13] = "ENTER";
            Key_Presses[Key_Presses["SPACE"] = 32] = "SPACE";
            Key_Presses[Key_Presses["DOWNARROW"] = 40] = "DOWNARROW";
        })(ManagedMemoryAnalyzer.Key_Presses || (ManagedMemoryAnalyzer.Key_Presses = {}));
        var Key_Presses = ManagedMemoryAnalyzer.Key_Presses;
        (function (Mouse_Buttons) {
            Mouse_Buttons[Mouse_Buttons["LEFT_BUTTON"] = 1] = "LEFT_BUTTON";
            Mouse_Buttons[Mouse_Buttons["MIDDLE_BUTTON"] = 2] = "MIDDLE_BUTTON";
            Mouse_Buttons[Mouse_Buttons["RIGHT_BUTTON"] = 3] = "RIGHT_BUTTON";
        })(ManagedMemoryAnalyzer.Mouse_Buttons || (ManagedMemoryAnalyzer.Mouse_Buttons = {}));
        var Mouse_Buttons = ManagedMemoryAnalyzer.Mouse_Buttons;
        (function (SnapshotType) {
            SnapshotType[SnapshotType["GC_DUMP"] = 1] = "GC_DUMP";
            SnapshotType[SnapshotType["LIVE_MANAGED"] = 2] = "LIVE_MANAGED";
            SnapshotType[SnapshotType["LIVE_NATIVE"] = 3] = "LIVE_NATIVE";
            SnapshotType[SnapshotType["X86_DUMP"] = 4] = "X86_DUMP";
            SnapshotType[SnapshotType["X64_DUMP"] = 5] = "X64_DUMP";
            SnapshotType[SnapshotType["ARM_DUMP"] = 6] = "ARM_DUMP";
        })(ManagedMemoryAnalyzer.SnapshotType || (ManagedMemoryAnalyzer.SnapshotType = {}));
        var SnapshotType = ManagedMemoryAnalyzer.SnapshotType;
        (function (HeapViewBroadcastEventType) {
            HeapViewBroadcastEventType[HeapViewBroadcastEventType["ANALYSIS_COMPLETE_SUCCESS"] = 0] = "ANALYSIS_COMPLETE_SUCCESS";
            HeapViewBroadcastEventType[HeapViewBroadcastEventType["VIEW_FILTER_CHANGED"] = 1] = "VIEW_FILTER_CHANGED";
            HeapViewBroadcastEventType[HeapViewBroadcastEventType["ANALYSIS_ERROR"] = 2] = "ANALYSIS_ERROR";
        })(ManagedMemoryAnalyzer.HeapViewBroadcastEventType || (ManagedMemoryAnalyzer.HeapViewBroadcastEventType = {}));
        var HeapViewBroadcastEventType = ManagedMemoryAnalyzer.HeapViewBroadcastEventType;
        (function (RefGraphDirection) {
            RefGraphDirection[RefGraphDirection["Forward"] = 0] = "Forward";
            RefGraphDirection[RefGraphDirection["Backward"] = 1] = "Backward";
        })(ManagedMemoryAnalyzer.RefGraphDirection || (ManagedMemoryAnalyzer.RefGraphDirection = {}));
        var RefGraphDirection = ManagedMemoryAnalyzer.RefGraphDirection;
        (function (ViewType) {
            ViewType[ViewType["TypesView"] = 0] = "TypesView";
            ViewType[ViewType["ObjectsView"] = 1] = "ObjectsView";
            ViewType[ViewType["AggregatedStacksView"] = 2] = "AggregatedStacksView";
        })(ManagedMemoryAnalyzer.ViewType || (ManagedMemoryAnalyzer.ViewType = {}));
        var ViewType = ManagedMemoryAnalyzer.ViewType;
        (function (KeyContextConversionRequestType) {
            KeyContextConversionRequestType[KeyContextConversionRequestType["AggregateStackByCaller"] = 0] = "AggregateStackByCaller";
            KeyContextConversionRequestType[KeyContextConversionRequestType["AllocationListByCaller"] = 1] = "AllocationListByCaller";
        })(ManagedMemoryAnalyzer.KeyContextConversionRequestType || (ManagedMemoryAnalyzer.KeyContextConversionRequestType = {}));
        var KeyContextConversionRequestType = ManagedMemoryAnalyzer.KeyContextConversionRequestType;
        var DebuggerModeChangedEventArgs = (function () {
            function DebuggerModeChangedEventArgs() {
            }
            return DebuggerModeChangedEventArgs;
        }());
        ManagedMemoryAnalyzer.DebuggerModeChangedEventArgs = DebuggerModeChangedEventArgs;
        var MemoryAnalysisHelpers = (function () {
            function MemoryAnalysisHelpers() {
            }
            MemoryAnalysisHelpers.getChildById = function (id, root) {
                if (root.getAttribute("data-id") === id)
                    return root;
                if (!root.children)
                    return null;
                for (var i = 0; i < root.children.length; i++) {
                    var element = MemoryAnalysisHelpers.getChildById(id, root.children[i]);
                    if (element)
                        return element;
                }
                return null;
            };
            MemoryAnalysisHelpers.getPosition = function (element, fromCenter) {
                if (fromCenter === void 0) { fromCenter = true; }
                var position = new Array();
                var rect = element.getBoundingClientRect();
                position["x"] = rect.left;
                position["y"] = rect.top;
                if (fromCenter) {
                    position["x"] += element.offsetWidth / 2;
                    position["y"] += element.offsetHeight / 2;
                }
                return position;
            };
            MemoryAnalysisHelpers.formatResource = function (resourceString) {
                var values = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    values[_i - 1] = arguments[_i];
                }
                var formatted = Microsoft.Plugin.Resources.getString(resourceString);
                values.forEach(function (value, i) {
                    formatted = formatted.replace("{" + i + "}", value);
                });
                return formatted;
            };
            MemoryAnalysisHelpers.getFormattedDigitLocaleString = function (source) {
                return MemoryAnalyzer.FormattingHelpers.getNativeDigitLocaleString(source);
            };
            MemoryAnalysisHelpers.getNumberString = function (value, decimalDigits) {
                return MemoryAnalysisHelpers.getDecimalLocaleString(value, false, decimalDigits);
            };
            MemoryAnalysisHelpers.getSignedNumberString = function (value, decimalDigits) {
                return MemoryAnalysisHelpers.getDecimalLocaleString(value, true, decimalDigits);
            };
            MemoryAnalysisHelpers.getDecimalLocaleString = function (value, forceSign, decimalDigits) {
                return (decimalDigits !== undefined && decimalDigits >= 0) ?
                    MemoryAnalyzer.FormattingHelpers.getDecimalLocaleString(value.toFixed(decimalDigits), true, forceSign) :
                    MemoryAnalyzer.FormattingHelpers.getDecimalLocaleString(value, true, forceSign);
            };
            return MemoryAnalysisHelpers;
        }());
        ManagedMemoryAnalyzer.MemoryAnalysisHelpers = MemoryAnalysisHelpers;
    })(ManagedMemoryAnalyzer = Debugger.ManagedMemoryAnalyzer || (Debugger.ManagedMemoryAnalyzer = {}));
})(Debugger || (Debugger = {}));
var Debugger;
(function (Debugger) {
    var ManagedMemoryAnalyzer;
    (function (ManagedMemoryAnalyzer) {
        var SummaryViewer;
        (function (SummaryViewer) {
            var ContextMenu = Microsoft.Plugin.ContextMenu;
            var SnapshotTileView = (function () {
                function SnapshotTileView(model, baseline, viewer, snapshots) {
                    var _this = this;
                    this._model = model;
                    this._baseline = baseline;
                    this._others = snapshots;
                    this._viewer = viewer;
                    this._infoViews = new Array();
                    var template = document.getElementById("SnapshotTileTemplate");
                    this.element = document.createElement("div");
                    this.element.innerHTML = template.innerHTML;
                    this._info = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("snapshotInfoDiv", this.element);
                    this._moreOptions = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("snapshotTileMoreOptions", this.element);
                    this._progress = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("snapshotTileProgress", this.element);
                    if (model.Heaps.length > 1) {
                        ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("snapshotTile", this.element).classList.add("mixedMode");
                        this._progress.classList.add("mixedMode");
                    }
                    ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("snapshotTileTitle", this.element).innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getFormattedDigitLocaleString(this._model.Name);
                    ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("snapshotTakenDate", this.element).innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("SummaryViewTimestamp", this._model.Time);
                    this.generateSummaryInfo();
                    this.element.onmousedown = this.onContextMenu.bind(this);
                    this._moreOptions.onmousedown = this.onMoreOptions.bind(this);
                    this._moreOptions.onkeydown = function (e) { return _this.onContextKeyboard(e, false); };
                    this._moreOptions.onkeyup = function (e) { return _this.onContextKeyboard(e, true); };
                }
                SnapshotTileView.prototype.generateSummaryInfo = function () {
                    var _this = this;
                    var useNames = this._model.Heaps.length > 1;
                    this._model.Heaps.forEach(function (heap, i) {
                        var baselineHeap = (_this._baseline !== null) ? _this._baseline.Heaps[i] : null;
                        var name = useNames ? ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("SummaryViewType" + SnapshotTileView.SnapshotTypeNames[heap.Type]) : null;
                        var infoView = new HeapDataSummaryView(name, _this, heap, baselineHeap);
                        _this._infoViews.push(infoView);
                        _this._info.appendChild(infoView.element);
                    });
                };
                SnapshotTileView.prototype.onContextDiff = function (id) {
                    this.showDiffViewAsync(this._model.Heaps[0].Id, id);
                };
                SnapshotTileView.prototype.onContextDelete = function () {
                    this._viewer.destroySnapshotAsync(this._model);
                };
                SnapshotTileView.prototype.onContextMenu = function (event) {
                    if (event.which === ManagedMemoryAnalyzer.Mouse_Buttons.RIGHT_BUTTON) {
                        event.preventDefault();
                        this.showContextMenu(event.clientX, event.clientY);
                    }
                };
                SnapshotTileView.prototype.onContextKeyboard = function (event, launchMenu) {
                    if (event.which === ManagedMemoryAnalyzer.Key_Presses.ENTER || event.which === ManagedMemoryAnalyzer.Key_Presses.SPACE || event.which === ManagedMemoryAnalyzer.Key_Presses.DOWNARROW) {
                        event.preventDefault();
                        if (launchMenu) {
                            var position = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getPosition(this._moreOptions);
                            this.showContextMenu(position["x"], position["y"]);
                        }
                        else {
                            event.stopImmediatePropagation();
                        }
                    }
                };
                SnapshotTileView.prototype.onMoreOptions = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    var position = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getPosition(this._moreOptions);
                    this.showContextMenu(position["x"], position["y"]);
                };
                SnapshotTileView.prototype.isViewOf = function (snapshot) {
                    if (this._model.Name !== snapshot.Name)
                        return false;
                    if (this._infoViews.length !== snapshot.Heaps.length)
                        return false;
                    for (var i = 0; i < this._infoViews.length; i++) {
                        if (!this._infoViews[i].isViewOf(snapshot.Heaps[i]))
                            return false;
                    }
                    return true;
                };
                SnapshotTileView.prototype.showHeapViewAsync = function (id, sortColumn) {
                    this.updateTileState(true);
                    this._viewer.viewHeapAsync(id, sortColumn);
                };
                SnapshotTileView.prototype.showDiffViewAsync = function (id, baseline, sortColumn) {
                    this.updateTileState(true);
                    this._viewer.viewDiffAsync(id, baseline, sortColumn);
                };
                SnapshotTileView.prototype.updateTileState = function (showProgress) {
                    if (showProgress) {
                        this._info.classList.add("hidden");
                        this._progress.classList.remove("hidden");
                    }
                    else {
                        this._info.classList.remove("hidden");
                        this._progress.classList.add("hidden");
                    }
                };
                SnapshotTileView.prototype.showContextMenu = function (x, y) {
                    if (!this._contextMenu) {
                        var contextMenuItems = this.generateContextMenuItems();
                        this._contextMenu = ContextMenu.create(contextMenuItems);
                    }
                    this._contextMenu.show(x, y);
                    this._viewer.ignoreNextScroll();
                };
                SnapshotTileView.prototype.generateContextMenuItems = function () {
                    var _this = this;
                    var menuDiff, menuDelete;
                    var snapshotItems = new Array();
                    var shouldShowMoreItem = this._others.length > SnapshotTileView.ContextMaxSnapshots + 1;
                    var diffCount = 0;
                    var max = shouldShowMoreItem ? SnapshotTileView.ContextMaxSnapshots - 1 : SnapshotTileView.ContextMaxSnapshots;
                    this._others.forEach(function (snapshot) {
                        if (snapshot.Heaps[0].Id === _this._model.Heaps[0].Id || diffCount >= max)
                            return;
                        diffCount++;
                        snapshotItems.push({
                            callback: _this.onContextDiff.bind(_this, snapshot.Heaps[0].Id),
                            label: ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getFormattedDigitLocaleString(snapshot.Name),
                            type: ContextMenu.MenuItemType.command,
                        });
                    });
                    snapshotItems.reverse();
                    if (shouldShowMoreItem) {
                        snapshotItems.push({
                            callback: this.showHeapViewAsync.bind(this, this._model.Heaps[0].Id),
                            label: ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("ContextMenuMore"),
                            type: ContextMenu.MenuItemType.command,
                        });
                    }
                    var hasDiffItems = this._others.length > 1;
                    menuDiff = {
                        callback: function () { },
                        label: ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("CompareSnapshotContext"),
                        type: ContextMenu.MenuItemType.command,
                        submenu: hasDiffItems ? snapshotItems : null,
                        disabled: function () { return !hasDiffItems; },
                    };
                    menuDelete = {
                        callback: this.onContextDelete.bind(this),
                        label: ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("DeleteSnapshotContext"),
                        type: ContextMenu.MenuItemType.command,
                        iconEnabled: "vs-mma-delete",
                        iconDisabled: "vs-mma-delete",
                    };
                    return [
                        menuDiff,
                        menuDelete,
                    ];
                };
                SnapshotTileView.ContextMaxSnapshots = 10;
                SnapshotTileView.SnapshotTypeNames = [
                    "",
                    "Dump",
                    "Managed",
                    "Native",
                    "Dump",
                    "Dump",
                    "DUMP",
                ];
                return SnapshotTileView;
            }());
            SummaryViewer.SnapshotTileView = SnapshotTileView;
            var HeapDataSummaryView = (function () {
                function HeapDataSummaryView(name, view, model, baselineModel) {
                    var _this = this;
                    this.BytesToKbRatio = 1024.0;
                    this.DecimalsIfSmall = 3;
                    this.DecimalsIfLarge = 0;
                    var template = document.getElementById("SnapshotSummaryTemplate");
                    this.element = document.createElement("div");
                    this.element.innerHTML = template.innerHTML;
                    this.model = model;
                    this._view = view;
                    if (name !== null) {
                        var type = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("snapshotSummaryType", this.element);
                        type.classList.remove("hidden");
                        type.innerText = name;
                    }
                    this._countDiffLink = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("countDiffLink", this.element);
                    this._countBaselineDiv = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("countBaselineDiv", this.element);
                    this._countDiffImage = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("countDiffImage", this.element);
                    this._sizeDiffImage = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("sizeDiffImage", this.element);
                    this._sizeDiffLink = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("sizeDiffLink", this.element);
                    this._sizeBaselineDiv = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("sizeBaselineDiv", this.element);
                    var summaryViewCount = model.Type === ManagedMemoryAnalyzer.SnapshotType.LIVE_MANAGED ? "ManagedSummaryCount" : "NativeSummaryCount";
                    var snapshotCountElement = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("snapshotCount", this.element);
                    var snapshotSizeElement = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getChildById("snapshotSize", this.element);
                    snapshotCountElement.innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource(summaryViewCount, ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getNumberString(this.model.Count));
                    var sizeInKb = this.model.Size / this.BytesToKbRatio;
                    var decimalPlaces = sizeInKb > 1 ? this.DecimalsIfLarge : this.DecimalsIfSmall;
                    snapshotSizeElement.innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("SummaryViewSize", ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getNumberString(sizeInKb, decimalPlaces));
                    snapshotCountElement.onclick = function (e) { _this._view.showHeapViewAsync(_this.model.Id, "Count"); };
                    snapshotSizeElement.onclick = function (e) { _this._view.showHeapViewAsync(_this.model.Id, "TotalSize"); };
                    this._countBaselineDiv.innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("SummaryViewBaseline");
                    this._sizeBaselineDiv.innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("SummaryViewBaseline");
                    this.updateBaseline(baselineModel);
                }
                HeapDataSummaryView.prototype.updateBaseline = function (newBaselineModel) {
                    var _this = this;
                    this.baselineModel = newBaselineModel;
                    if (this.baselineModel !== null) {
                        this._countBaselineDiv.classList.add("hidden");
                        this._countDiffLink.classList.remove("hidden");
                        this._sizeBaselineDiv.classList.add("hidden");
                        this._sizeDiffLink.classList.remove("hidden");
                        var count = this.model.Count - this.baselineModel.Count;
                        var summaryViewCount = newBaselineModel.Type === ManagedMemoryAnalyzer.SnapshotType.LIVE_MANAGED ? "ManagedSummaryCount" : "NativeSummaryCount";
                        this._countDiffLink.innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource(summaryViewCount, ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getSignedNumberString(count));
                        if (count > 0) {
                            this._countDiffImage.classList.add("HeapIncreaseIcon");
                        }
                        else if (count < 0) {
                            this._countDiffImage.classList.add("HeapDecreaseIcon");
                        }
                        var size = this.model.Size - this.baselineModel.Size;
                        size = size / this.BytesToKbRatio;
                        var decimalPlaces = size > 1 ? this.DecimalsIfLarge : this.DecimalsIfSmall;
                        this._sizeDiffLink.innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("SummaryViewSize", ManagedMemoryAnalyzer.MemoryAnalysisHelpers.getSignedNumberString(size, decimalPlaces));
                        if (size > 0) {
                            this._sizeDiffImage.classList.add("HeapIncreaseIcon");
                        }
                        else if (size < 0) {
                            this._sizeDiffImage.classList.add("HeapDecreaseIcon");
                        }
                        this._sizeDiffLink.disabled = this._countDiffLink.disabled = false;
                        this._sizeDiffLink.onclick = function (e) { _this._view.showDiffViewAsync(_this.model.Id, _this.baselineModel.Id, "TotalSizeDiff"); };
                        this._countDiffLink.onclick = function (e) { _this._view.showDiffViewAsync(_this.model.Id, _this.baselineModel.Id, "CountDiff"); };
                    }
                    else {
                        this._sizeBaselineDiv.classList.remove("hidden");
                        this._countBaselineDiv.classList.remove("hidden");
                        this._sizeDiffLink.classList.add("hidden");
                        this._countDiffLink.classList.add("hidden");
                        this._countDiffImage.classList.remove("HeapIncreaseIcon");
                        this._countDiffImage.classList.remove("HeapDecreaseIcon");
                        this._sizeDiffImage.classList.remove("HeapIncreaseIcon");
                        this._sizeDiffImage.classList.remove("HeapDecreaseIcon");
                    }
                };
                HeapDataSummaryView.prototype.isViewOf = function (snapshot) {
                    return this.model.Id === snapshot.Id &&
                        this.model.Type === snapshot.Type &&
                        this.model.Count === snapshot.Count &&
                        this.model.Size === snapshot.Size;
                };
                return HeapDataSummaryView;
            }());
        })(SummaryViewer = ManagedMemoryAnalyzer.SummaryViewer || (ManagedMemoryAnalyzer.SummaryViewer = {}));
    })(ManagedMemoryAnalyzer = Debugger.ManagedMemoryAnalyzer || (Debugger.ManagedMemoryAnalyzer = {}));
})(Debugger || (Debugger = {}));
var Debugger;
(function (Debugger) {
    var ManagedMemoryAnalyzer;
    (function (ManagedMemoryAnalyzer) {
        var SummaryViewer;
        (function (SummaryViewer) {
            var ManagedSummaryViewer = (function () {
                function ManagedSummaryViewer() {
                    var _this = this;
                    this.NativeMemoryCollectionAgentGuid = "3151D25D-A614-4E39-AE44-29DD3741791F";
                    this._adaptor = Microsoft.Plugin.Utilities.JSONMarshaler.attachToPublishedObject("Microsoft.VisualStudio.Debugger.LiveMemorySummaryViewModelMarshaler", {}, true);
                    Microsoft.Plugin.VS.Keyboard.setZoomState(false);
                    this._snapshotContainer = document.getElementById("snapshotContainer");
                    this._takeSnapshotTile = document.getElementById("takeSnapshotTile");
                    this._takeSnapshotButtonDiv = document.getElementById("takeSnapshotButtonDiv");
                    this._takeSnapshotButton = document.getElementById("takeSnapshotButton");
                    this._takeSnapshotCaption = document.getElementById("takeSnapshotCaption");
                    this._snapshotProgress = document.getElementById("takeSnapshotProgressDiv");
                    this._snapshotProgressCaption = document.getElementById("snapshotProgressCaption");
                    this._snapshotProgressCancel = document.getElementById("snapshotProgressCancelDiv");
                    this._viewDisabledMessageDiv = document.getElementById("viewDisabledMessageDiv");
                    this._enableSnapshotsDiv = document.getElementById("enableSnapshotsDiv");
                    this._enableSnapshotsCaption = document.getElementById("enableSnapshotsCaption");
                    this._enableSnapshotsCheckBox = document.getElementById("enableSnapshotsCheckBox");
                    document.getElementById("viewDisabledMessage").innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("AlertNativeCollectionUnavailable");
                    this._takeSnapshotCaption.innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("SummaryViewButton");
                    document.getElementById("snapshotProgressCancel").onclick = function (e) {
                        _this.cancelSnapshotAnalysisAsync();
                    };
                    document.getElementById("takeSnapshotButton").onclick = function (e) {
                        _this.TakeSnapshotAsync();
                    };
                    document.getElementById("snapshotProgressCancel").innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("SnapshotProgressCancel");
                    this._adaptor.addEventListener("CanTakeSnapshotChangedEvent", function (eventArgs) {
                        _this.completeProgress(eventArgs.ResetView);
                        if (eventArgs.ResetView) {
                            _this.actionCompleted();
                        }
                    });
                    this._adaptor.addEventListener("SummaryViewUpdatedEvent", function (eventArgs) {
                        _this.updateSummaryViewAsync(eventArgs.ResetView, eventArgs.CanTakeSnapshot);
                    });
                    this._adaptor.addEventListener("SnapshotProgressUpdatedEvent", function (eventArgs) {
                        _this.updateProgressIndicator(eventArgs);
                    });
                    this._adaptor.addEventListener("ProgressCancelEnabledEvent", function (eventArgs) {
                        _this.enableProgressCancel();
                    });
                    this._adaptor.addEventListener("HeapViewReadyEvent", function (eventArgs) {
                        _this.updateAnalyzingTiles();
                        _this.actionCompleted();
                    });
                    this.resetState();
                    this._nativeMemoryToolEnabled = false;
                    this._adaptor._call("IsNativeLiveMemoryToolEnabled").then(function (result) {
                        _this._nativeMemoryToolEnabled = (result === true);
                        if (_this._nativeMemoryToolEnabled) {
                            _this._standardCollector = Microsoft.VisualStudio.DiagnosticsHub.Collectors.getStandardTransportService();
                            if (_this._standardCollector) {
                                _this._standardCollector.addMessageListener(new Microsoft.VisualStudio.DiagnosticsHub.Guid(_this.NativeMemoryCollectionAgentGuid), _this.onMessageReceivedFromAgent.bind(_this));
                            }
                        }
                    });
                    this._managedMemoryToolEnabled = false;
                    this._adaptor._call("IsManagedLiveMemoryToolEnabled").then(function (result) {
                        _this._managedMemoryToolEnabled = (result === true);
                    });
                    this._adaptor._call("IsNativeLiveMemoryToolSupported").then(function (result) {
                        _this._nativeMemoryToolSupported = (result === true);
                        if (_this._nativeMemoryToolSupported) {
                            _this._enableSnapshotsDiv.classList.remove("hidden");
                            _this._enableSnapshotsCaption.innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("EnableSnapshotsCaption");
                            _this._enableSnapshotsCheckBox.checked = (_this._nativeMemoryToolEnabled === true);
                            _this._enableSnapshotsCheckBox.onchange = function (e) {
                                _this._adaptor._call("SetNativeMemoryCollectionState", _this._enableSnapshotsCheckBox.checked);
                            };
                        }
                        if (_this._nativeMemoryToolSupported && !_this._nativeMemoryToolEnabled) {
                            _this.showNativeErrorMessageAsync(ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("NativeCollectorDisabled"), "snapshotsDisabledMessage");
                        }
                    });
                    this._ignoreScroll = false;
                    document.onscroll = function (e) {
                        if (_this._ignoreScroll) {
                            _this._ignoreScroll = false;
                            scrollTo(0, _this._scrollOffset);
                            e.stopImmediatePropagation();
                            e.preventDefault();
                            return false;
                        }
                        return true;
                    };
                    this.updateTakeSnapshotTile(false);
                    this.updateSnapshotsAsync();
                }
                ManagedSummaryViewer.prototype.ignoreNextScroll = function () {
                    this._scrollOffset = document.documentElement.scrollTop - (document.documentElement.clientTop || 0);
                    this._ignoreScroll = true;
                };
                ManagedSummaryViewer.prototype.queueAction = function (action, dirtyIds) {
                    var _this = this;
                    if (dirtyIds) {
                        dirtyIds.forEach(function (id) { return _this._dirtyIds.push(id); });
                    }
                    if (!this._actionsInProgress) {
                        this._actionsInProgress = true;
                        action();
                    }
                    else {
                        this._queuedActions.push(action);
                    }
                };
                ManagedSummaryViewer.prototype.resetActionQueue = function () {
                    this._actionsInProgress = false;
                    this._dirtyIds = new Array();
                    this._queuedActions = new Array();
                };
                ManagedSummaryViewer.prototype.isClean = function () {
                    var ids = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        ids[_i - 0] = arguments[_i];
                    }
                    for (var i = 0; i < ids.length; i++) {
                        if (this._dirtyIds.some(function (dirty) { return ids[i] == dirty; })) {
                            return false;
                        }
                    }
                    return true;
                };
                ManagedSummaryViewer.prototype.resetState = function () {
                    this.resetActionQueue();
                    this._snapshotTiles = new Array();
                    this._snapshotProgressCancel.classList.add("hidden");
                    this._snapshotProgressCaption.innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("SnapshotProgressCaptionDefault");
                    var container = document.getElementById("snapshotContainer");
                    while (container.hasChildNodes()) {
                        container.removeChild(container.firstChild);
                    }
                    container.appendChild(this._takeSnapshotTile);
                    this.updateTakeSnapshotTile(false);
                    this.updateSummaryViewEnabledState(true);
                    this._takeSnapshotButton.disabled = false;
                };
                ManagedSummaryViewer.prototype.TakeSnapshotAsync = function () {
                    var _this = this;
                    if (this._nativeMemoryToolEnabled) {
                        var message = "{ \"commandName\": \"takeSnapshot\", \"snapshotId\": \"" + ManagedSummaryViewer._nextNativeSnapshotIdentifier + "\", \"agentMask\": \"65535\" }";
                        this.sendMessageToAgent(message);
                    }
                    else {
                        this.queueAction(function () {
                            _this._adaptor._call("TakeSnapshot", null).then(function (result) {
                                if (result) {
                                    _this.updateTakeSnapshotTile(true);
                                }
                            });
                        });
                    }
                };
                ManagedSummaryViewer.prototype.updateSummaryViewAsync = function (resetView, canTakeSnapshot) {
                    if (canTakeSnapshot === void 0) { canTakeSnapshot = true; }
                    if (resetView) {
                        this.resetState();
                    }
                    this._takeSnapshotButton.disabled = !canTakeSnapshot;
                    return this.updateSnapshotsAsync();
                };
                ManagedSummaryViewer.prototype.updateSummaryViewEnabledState = function (enable) {
                    if (enable) {
                        this._snapshotContainer.classList.remove("hidden");
                        this._viewDisabledMessageDiv.classList.add("hidden");
                    }
                    else {
                        this._snapshotContainer.classList.add("hidden");
                        this._viewDisabledMessageDiv.classList.remove("hidden");
                    }
                };
                ManagedSummaryViewer.prototype.updateAnalyzingTiles = function () {
                    this._snapshotTiles.forEach(function (t) { t.updateTileState(false); });
                };
                ManagedSummaryViewer.prototype.updateTakeSnapshotTile = function (snapshotInProgress) {
                    if (snapshotInProgress) {
                        this._takeSnapshotButtonDiv.classList.add("hidden");
                        this._snapshotProgress.classList.remove("hidden");
                    }
                    else {
                        this._takeSnapshotButtonDiv.classList.remove("hidden");
                        this._snapshotProgress.classList.add("hidden");
                        this._snapshotProgressCaption.innerText = ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("SnapshotProgressCaptionDefault");
                    }
                };
                ManagedSummaryViewer.prototype.updateProgressIndicator = function (eventArgs) {
                    this._snapshotProgressCaption.innerText = eventArgs.Caption;
                };
                ManagedSummaryViewer.prototype.enableProgressCancel = function () {
                    this._snapshotProgressCancel.classList.remove("hidden");
                };
                ManagedSummaryViewer.prototype.completeProgress = function (ready) {
                    if (ready) {
                        this.updateTakeSnapshotTile(false);
                    }
                    return this.updateSummaryViewAsync(false);
                };
                ManagedSummaryViewer.prototype.actionCompleted = function () {
                    if (this._queuedActions.length == 0) {
                        this.resetActionQueue();
                    }
                    else {
                        var action = this._queuedActions.shift();
                        action();
                    }
                };
                ManagedSummaryViewer.prototype.updateSnapshotsAsync = function () {
                    var _this = this;
                    return this._adaptor._call("GetCurrentProcessSnapshots").then(function (result) {
                        if (result != null) {
                            var container = document.getElementById("snapshotContainer");
                            container.removeChild(_this._takeSnapshotTile);
                            _this._snapshotTiles = _this.mergeNewSnapshots(container, _this._snapshotTiles, result);
                            container.appendChild(_this._takeSnapshotTile);
                        }
                        if (result.length > 0 && result[0].Heaps.length > 1) {
                            _this._takeSnapshotTile.classList.add("mixedMode");
                        }
                        else {
                            _this._takeSnapshotTile.classList.remove("mixedMode");
                        }
                    });
                };
                ManagedSummaryViewer.prototype.mergeNewSnapshots = function (elements, oldViews, newSnapshots) {
                    var same = oldViews.length === newSnapshots.length;
                    for (var i = 0; i < oldViews.length && same; i++) {
                        same = oldViews[i].isViewOf(newSnapshots[i]);
                    }
                    return same ? oldViews.slice(0, oldViews.length) : this.getNewViews(elements, newSnapshots);
                };
                ManagedSummaryViewer.prototype.getNewViews = function (elements, snapshots) {
                    while (elements.hasChildNodes()) {
                        elements.removeChild(elements.firstChild);
                    }
                    var views = new Array();
                    var menuSnapshots = snapshots.slice().reverse();
                    for (var i = 0; i < snapshots.length; i++) {
                        var view = new SummaryViewer.SnapshotTileView(snapshots[i], i == 0 ? null : snapshots[i - 1], this, menuSnapshots);
                        elements.appendChild(view.element);
                        views.push(view);
                    }
                    return views;
                };
                ManagedSummaryViewer.prototype.onMessageReceivedFromAgent = function (message) {
                    var _this = this;
                    if (message) {
                        var obj = JSON.parse(message);
                        if (obj.eventName) {
                            switch (obj.eventName) {
                                case "snapshotData":
                                    var snapshotData = obj;
                                    this.queueAction(function () {
                                        _this._adaptor._call("TakeSnapshot", snapshotData.data.data.FileName).then(function (result) {
                                            if (result) {
                                                ManagedSummaryViewer._nextNativeSnapshotIdentifier++;
                                                _this.updateTakeSnapshotTile(true);
                                            }
                                        });
                                    });
                                    break;
                                default:
                                    break;
                            }
                        }
                        else if (obj.startupError) {
                            if (obj.errorMessage === "VSHUB_E_ETW_PROVIDER_OVERLOADED") {
                                this.showNativeErrorMessageAsync(ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("MultipleHeapSessionStartupError"));
                            }
                            else {
                                this.showNativeErrorMessageAsync(ManagedMemoryAnalyzer.MemoryAnalysisHelpers.formatResource("UnableToStartNativeMemoryProfiling"));
                            }
                        }
                    }
                };
                ManagedSummaryViewer.prototype.showNativeErrorMessageAsync = function (message, cssClass) {
                    var divElement = document.getElementById("viewDisabledMessageDiv");
                    divElement.className = "";
                    if (cssClass) {
                        divElement.classList.add(cssClass);
                    }
                    else {
                        divElement.classList.add("viewDisabledMessage");
                    }
                    document.getElementById("viewDisabledMessage").innerHTML = message;
                    this.updateSummaryViewEnabledState(false);
                };
                ManagedSummaryViewer.prototype.sendMessageToAgent = function (message) {
                    this._standardCollector.sendStringToCollectionAgent(this.NativeMemoryCollectionAgentGuid, message);
                };
                ManagedSummaryViewer.prototype.viewHeapAsync = function (id, sortColumn) {
                    var _this = this;
                    this.queueAction(function () {
                        if (_this.isClean(id)) {
                            _this._adaptor._call("LaunchAnalyzer", id, sortColumn);
                        }
                    });
                };
                ManagedSummaryViewer.prototype.viewDiffAsync = function (id, baselineId, sortColumn) {
                    var _this = this;
                    this.queueAction(function () {
                        if (_this.isClean(id, baselineId)) {
                            _this._adaptor._call("LaunchAnalyzerAndDiff", id, baselineId, sortColumn);
                        }
                    });
                };
                ManagedSummaryViewer.prototype.destroySnapshotAsync = function (snapshot) {
                    var _this = this;
                    var ids = snapshot.Heaps.map(function (heap) { return heap.Id; });
                    this.queueAction(function () {
                        _this._adaptor._call("DestroySnapshot", ids).then(function (result) {
                            _this.updateSnapshotsAsync();
                            _this.actionCompleted();
                        });
                    }, ids);
                };
                ManagedSummaryViewer.prototype.cancelSnapshotAnalysisAsync = function () {
                    this._snapshotProgressCancel.classList.add("hidden");
                    this.resetActionQueue();
                    return this._adaptor._call("CancelSnapshotAnalysis");
                };
                ManagedSummaryViewer._nextNativeSnapshotIdentifier = 1;
                return ManagedSummaryViewer;
            }());
            SummaryViewer.ManagedSummaryViewer = ManagedSummaryViewer;
            Microsoft.Plugin.addEventListener("pluginready", function () {
                ManagedSummaryViewer.Instance = new ManagedSummaryViewer();
            });
        })(SummaryViewer = ManagedMemoryAnalyzer.SummaryViewer || (ManagedMemoryAnalyzer.SummaryViewer = {}));
    })(ManagedMemoryAnalyzer = Debugger.ManagedMemoryAnalyzer || (Debugger.ManagedMemoryAnalyzer = {}));
})(Debugger || (Debugger = {}));
var Debugger;
(function (Debugger) {
    var ManagedMemoryAnalyzer;
    (function (ManagedMemoryAnalyzer) {
        var Swimlanes;
        (function (Swimlanes) {
            "use strict";
            var DiagHub = Microsoft.VisualStudio.DiagnosticsHub;
            var GCDataSeries = (function () {
                function GCDataSeries(resources) {
                    var _this = this;
                    this._logger = DiagHub.getLogger();
                    this._gcEvents = [];
                    this._newDataEvent = new DiagHub.AggregatedEvent();
                    this._dataWarehouseRequestHandle = 1;
                    this._droppedRequest = false;
                    this._currentTimespan = new DiagHub.JsonTimespan(DiagHub.BigNumber.zero, DiagHub.BigNumber.zero);
                    this._samples = 250;
                    this._gcMarker = document.createElement("img");
                    this._gcMarker.src = Microsoft.Plugin.Theme.getValue("vs-mma-gc-glyph");
                    this._gcMarker.style.width = GCDataSeries._gcMarkerSize + "px";
                    this._gcMarker.style.height = GCDataSeries._gcMarkerSize + "px";
                    this._title = resources["GcLegendText"];
                    this._tooltip = resources["GcLegendTooltipText"];
                    DiagHub.DataWarehouse.loadDataWarehouse()
                        .then(function (dw) {
                        var countersContextData = {
                            customDomain: {
                                CounterId: GCDataSeries.counterId
                            }
                        };
                        return dw.getFilteredData(countersContextData, GCDataSeries.analyzerId);
                    }).then(function (responseData) {
                        _this._countersResult = responseData;
                    }).done(function () {
                        _this._dataWarehouseRequestHandle = null;
                        _this._droppedRequest = false;
                        _this.requestUpdate();
                    });
                }
                Object.defineProperty(GCDataSeries, "counterId", {
                    get: function () {
                        return "ManagedMemoryAnalyzer.Counters.GC";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GCDataSeries, "analyzerId", {
                    get: function () {
                        return "66EDDDF1-2277-40F3-983A-6FF57A433ECB";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GCDataSeries.prototype, "minValue", {
                    get: function () {
                        return Number.NaN;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GCDataSeries.prototype, "maxValue", {
                    get: function () {
                        return Number.NaN;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GCDataSeries.prototype, "marker", {
                    get: function () {
                        return this._gcMarker;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GCDataSeries.prototype, "title", {
                    get: function () {
                        return this._title;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GCDataSeries.prototype, "tooltip", {
                    get: function () {
                        return this._tooltip;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GCDataSeries.prototype, "newDataEvent", {
                    get: function () {
                        return this._newDataEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                GCDataSeries.prototype.dispose = function () {
                    this._countersResult.dispose();
                    this._newDataEvent.dispose();
                };
                GCDataSeries.prototype.onViewportChanged = function (viewport) {
                    this._currentTimespan = viewport;
                    this.requestUpdate();
                };
                GCDataSeries.prototype.onDataUpdate = function (timestamp) {
                    if (this._currentTimespan.contains(timestamp)) {
                        this.requestUpdate();
                    }
                };
                GCDataSeries.prototype.draw = function (context, graphInformation) {
                    var _this = this;
                    if (this._gcEvents.length === 0) {
                        return;
                    }
                    this._gcEvents.forEach(function (point) {
                        var x = DiagHub.Utilities.convertToPixel(point.Timestamp, graphInformation.gridX, graphInformation.chartRect.width) - (GCDataSeries._gcMarkerSize / 2);
                        context.drawImage(_this._gcMarker, x, 0, GCDataSeries._gcMarkerSize, GCDataSeries._gcMarkerSize);
                    });
                };
                GCDataSeries.prototype.getPointAtTimestamp = function (timestamp, pointToFind) {
                    if (this._gcEvents.length === 0) {
                        return null;
                    }
                    var point = { Timestamp: timestamp, Value: 0 };
                    var pointCompare = function (left, right) {
                        return right.Timestamp.greater(left.Timestamp);
                    };
                    switch (pointToFind) {
                        case DiagHub.PointToFind.LessThanOrEqual:
                            var index = DiagHub.Utilities.findLessThan(this._gcEvents, point, pointCompare);
                            point = this._gcEvents[index];
                            break;
                        case DiagHub.PointToFind.GreaterThanOrEqual:
                            var index = DiagHub.Utilities.findGreaterThan(this._gcEvents, point, pointCompare);
                            point = this._gcEvents[index];
                            break;
                        case DiagHub.PointToFind.Nearest:
                        default:
                            var minIndex = DiagHub.Utilities.findLessThan(this._gcEvents, point, pointCompare);
                            var maxIndex = Math.min(minIndex + 1, this._gcEvents.length - 1);
                            var minDelta = DiagHub.BigNumber.subtract(timestamp, this._gcEvents[minIndex].Timestamp);
                            var maxDelta = DiagHub.BigNumber.subtract(this._gcEvents[maxIndex].Timestamp, timestamp);
                            index = minDelta.greater(maxDelta) ? maxIndex : minIndex;
                            point = this._gcEvents[index];
                            break;
                    }
                    return {
                        timestamp: point.Timestamp,
                        tooltip: point.ToolTip
                    };
                };
                GCDataSeries.prototype.requestUpdate = function () {
                    var _this = this;
                    if (this._dataWarehouseRequestHandle) {
                        this._droppedRequest = true;
                        return;
                    }
                    this._dataWarehouseRequestHandle = window.setTimeout(function () {
                        var requestData = {
                            type: "SamplePoints",
                            begin: _this._currentTimespan.begin.jsonValue,
                            end: _this._currentTimespan.end.jsonValue,
                            samples: Math.max(_this._samples, 2)
                        };
                        _this._countersResult.getResult(requestData)
                            .then(function (result) { return _this.cachePoints(result); })
                            .done(function () {
                            _this._dataWarehouseRequestHandle = null;
                            if (_this._droppedRequest) {
                                window.setTimeout(_this.requestUpdate.bind(_this), DiagHub.Constants.TimeoutImmediate);
                                _this._droppedRequest = false;
                            }
                        }, function (error) {
                            _this._logger.error("Error occurred while communicating with the DataWarehouse: " + JSON.stringify(error));
                        });
                    }, DiagHub.Constants.TimeoutImmediate);
                };
                GCDataSeries.prototype.cachePoints = function (result) {
                    if (result.p.length === 0) {
                        this._gcEvents = [];
                        return;
                    }
                    this._gcEvents = result.p.map(function (point) {
                        var customData = JSON.parse(point.d);
                        var duration = DiagHub.RulerUtilities.formatTime(new DiagHub.BigNumber(customData.duration.h, customData.duration.l));
                        var forcedTooltipString = customData.forced ? "GcTooltipForced" : "GcTooltipUnforced";
                        var tooltipSegments = [];
                        tooltipSegments.push(Microsoft.Plugin.Resources.getString("GcTooltipGenerationNumber", customData.generation));
                        tooltipSegments.push(Microsoft.Plugin.Resources.getString("GcTooltipDuration", duration));
                        tooltipSegments.push(Microsoft.Plugin.Resources.getString(forcedTooltipString));
                        return {
                            Timestamp: new DiagHub.BigNumber(point.t.h, point.t.l),
                            CustomData: point.d,
                            ToolTip: tooltipSegments.join('\n')
                        };
                    });
                    this._newDataEvent.invokeEvent(this);
                };
                GCDataSeries._gcMarkerSize = 10;
                return GCDataSeries;
            }());
            Swimlanes.GCDataSeries = GCDataSeries;
        })(Swimlanes = ManagedMemoryAnalyzer.Swimlanes || (ManagedMemoryAnalyzer.Swimlanes = {}));
    })(ManagedMemoryAnalyzer = Debugger.ManagedMemoryAnalyzer || (Debugger.ManagedMemoryAnalyzer = {}));
})(Debugger || (Debugger = {}));
var Debugger;
(function (Debugger) {
    var ManagedMemoryAnalyzer;
    (function (ManagedMemoryAnalyzer) {
        var Swimlanes;
        (function (Swimlanes) {
            "use strict";
            var DiagHub = Microsoft.VisualStudio.DiagnosticsHub;
            var SnapshotDataSeriesElement = (function () {
                function SnapshotDataSeriesElement(data, unitConverter) {
                    this._timestamp = new DiagHub.BigNumber(data.TimeInNs.h, data.TimeInNs.l);
                    var tooltipList = [data.Name];
                    data.Heaps.forEach(function (heap) {
                        if (heap.Type === ManagedMemoryAnalyzer.SnapshotType.LIVE_MANAGED) {
                            tooltipList.push(Microsoft.Plugin.Resources.getString("SnapshotTooltipManagedCount", heap.Count));
                            tooltipList.push(Microsoft.Plugin.Resources.getString("SnapshotTooltipManagedSize", unitConverter.formatNumber(heap.Size)));
                        }
                        else if (heap.Type === ManagedMemoryAnalyzer.SnapshotType.LIVE_NATIVE) {
                            tooltipList.push(Microsoft.Plugin.Resources.getString("SnapshotTooltipNativeCount", heap.Count));
                            tooltipList.push(Microsoft.Plugin.Resources.getString("SnapshotTooltipNativeSize", unitConverter.formatNumber(heap.Size)));
                        }
                    });
                    this._tooltip = tooltipList.join("\n");
                }
                Object.defineProperty(SnapshotDataSeriesElement.prototype, "timestamp", {
                    get: function () {
                        return this._timestamp;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SnapshotDataSeriesElement.prototype, "tooltip", {
                    get: function () {
                        return this._tooltip;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SnapshotDataSeriesElement;
            }());
            Swimlanes.SnapshotDataSeriesElement = SnapshotDataSeriesElement;
            var SnapshotDataSeries = (function () {
                function SnapshotDataSeries(unitConverter, resources) {
                    var _this = this;
                    this._snapshots = [];
                    this._newDataEvent = new DiagHub.AggregatedEvent();
                    this._unitConverter = unitConverter;
                    this._snapshotMarker = document.createElement("img");
                    this._snapshotMarker.src = Microsoft.Plugin.Theme.getValue("vs-mma-snapshot-glyph");
                    this._snapshotMarker.style.width = SnapshotDataSeries._snapshotMarkerSize + "px";
                    this._snapshotMarker.style.height = SnapshotDataSeries._snapshotMarkerSize + "px";
                    this._title = resources["SnapshotLegendText"];
                    this._tooltip = resources["SnapshotLegendTooltipText"];
                    this._onNewSnapshotDataBoundFunction = this.onNewSnapshotData.bind(this);
                    this._summaryViewModelMarshaler = Microsoft.Plugin.Utilities.JSONMarshaler.attachToPublishedObject("Microsoft.VisualStudio.Debugger.LiveMemorySummaryViewModelMarshaler", {}, false);
                    this._summaryViewModelMarshaler.addEventListener("SummaryViewUpdatedEvent", this._onNewSnapshotDataBoundFunction);
                    this._summaryViewModelMarshaler._call("GetCurrentProcessSnapshots")
                        .done(function (snapshots) { _this.onNewSnapshotData({ Snapshots: snapshots }); });
                }
                Object.defineProperty(SnapshotDataSeries.prototype, "minValue", {
                    get: function () {
                        return Number.NaN;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SnapshotDataSeries.prototype, "maxValue", {
                    get: function () {
                        return Number.NaN;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SnapshotDataSeries.prototype, "marker", {
                    get: function () {
                        return this._snapshotMarker;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SnapshotDataSeries.prototype, "title", {
                    get: function () {
                        return this._title;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SnapshotDataSeries.prototype, "tooltip", {
                    get: function () {
                        return this._tooltip;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SnapshotDataSeries.prototype, "newDataEvent", {
                    get: function () {
                        return this._newDataEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                SnapshotDataSeries.prototype.dispose = function () {
                    this._summaryViewModelMarshaler.removeEventListener("SummaryViewUpdatedEvent", this._onNewSnapshotDataBoundFunction);
                    this._newDataEvent.dispose();
                };
                SnapshotDataSeries.prototype.onViewportChanged = function (viewport) {
                };
                SnapshotDataSeries.prototype.getPointAtTimestamp = function (timestamp, pointToFind) {
                    if (this._snapshots.length === 0) {
                        return null;
                    }
                    var point = { timestamp: timestamp };
                    var snapshotDataSeriesElementLessThan = function (left, right) {
                        return right.timestamp.greater(left.timestamp);
                    };
                    switch (pointToFind) {
                        case DiagHub.PointToFind.LessThanOrEqual:
                            var index = DiagHub.Utilities.findLessThan(this._snapshots, point, snapshotDataSeriesElementLessThan);
                            return this._snapshots[index];
                        case DiagHub.PointToFind.GreaterThanOrEqual:
                            var index = DiagHub.Utilities.findGreaterThan(this._snapshots, point, snapshotDataSeriesElementLessThan);
                            return this._snapshots[index];
                        case DiagHub.PointToFind.Nearest:
                        default:
                            var minIndex = DiagHub.Utilities.findLessThan(this._snapshots, point, snapshotDataSeriesElementLessThan);
                            var maxIndex = Math.min(minIndex + 1, this._snapshots.length - 1);
                            var minDelta = DiagHub.BigNumber.subtract(timestamp, this._snapshots[minIndex].timestamp);
                            var maxDelta = DiagHub.BigNumber.subtract(this._snapshots[maxIndex].timestamp, timestamp);
                            index = minDelta.greater(maxDelta) ? maxIndex : minIndex;
                            return this._snapshots[index];
                    }
                };
                SnapshotDataSeries.prototype.draw = function (context, graphInformation) {
                    var _this = this;
                    if (this._snapshots.length === 0) {
                        return;
                    }
                    var markerHalfWidth = (SnapshotDataSeries._snapshotMarkerSize / 2);
                    this._snapshots.forEach(function (snapshot) {
                        var x = DiagHub.Utilities.convertToPixel(snapshot.timestamp, graphInformation.gridX, graphInformation.chartRect.width) - markerHalfWidth;
                        if (x >= -markerHalfWidth && x < (graphInformation.chartRect.width + markerHalfWidth)) {
                            context.drawImage(_this._snapshotMarker, x, 0, SnapshotDataSeries._snapshotMarkerSize, SnapshotDataSeries._snapshotMarkerSize);
                        }
                    });
                };
                SnapshotDataSeries.prototype.onNewSnapshotData = function (eventArgs) {
                    var _this = this;
                    this._snapshots = eventArgs.Snapshots.map(function (snapshot) { return new SnapshotDataSeriesElement(snapshot, _this._unitConverter); });
                    this._newDataEvent.invokeEvent(this);
                };
                SnapshotDataSeries._snapshotMarkerSize = 10;
                return SnapshotDataSeries;
            }());
            Swimlanes.SnapshotDataSeries = SnapshotDataSeries;
        })(Swimlanes = ManagedMemoryAnalyzer.Swimlanes || (ManagedMemoryAnalyzer.Swimlanes = {}));
    })(ManagedMemoryAnalyzer = Debugger.ManagedMemoryAnalyzer || (Debugger.ManagedMemoryAnalyzer = {}));
})(Debugger || (Debugger = {}));
var Debugger;
(function (Debugger) {
    var ManagedMemoryAnalyzer;
    (function (ManagedMemoryAnalyzer) {
        var Swimlanes;
        (function (Swimlanes) {
            "use strict";
            var DiagHub = Microsoft.VisualStudio.DiagnosticsHub;
            function ManagedMemorySwimlaneFactory(componentConfig, isVisible, selectionEnabled, graphBehaviour, currentTimespan, selectionTimespan) {
                var swimlaneConfig = new DiagHub.SwimlaneConfiguration(componentConfig, currentTimespan, graphBehaviour);
                swimlaneConfig.header.isBodyExpanded = isVisible;
                var unitConverter = new DiagHub.LocalizedUnitConverter(swimlaneConfig.graph.jsonConfig.Units, swimlaneConfig.graph.resources);
                var additionalSeries = [];
                if (componentConfig.JsonObject.ShowGcData) {
                    var gcSeries = new Swimlanes.GCDataSeries(swimlaneConfig.graph.resources);
                    additionalSeries.push(gcSeries);
                    swimlaneConfig.graph.legend.push({
                        legendText: gcSeries.title,
                        legendTooltip: gcSeries.tooltip,
                        marker: gcSeries.marker
                    });
                }
                var snapshotSeries = new Swimlanes.SnapshotDataSeries(unitConverter, swimlaneConfig.graph.resources);
                additionalSeries.push(snapshotSeries);
                swimlaneConfig.graph.legend.push({
                    legendText: snapshotSeries.title,
                    legendTooltip: snapshotSeries.tooltip,
                    marker: snapshotSeries.marker
                });
                var graph = new DiagHub.MultiSeriesGraph(swimlaneConfig.graph, additionalSeries);
                graph.container.setAttribute("aria-label", componentConfig.Title);
                var leftScale = new DiagHub.Scale(swimlaneConfig.graph.scale, DiagHub.ScaleType.Left, unitConverter);
                var rightScale = new DiagHub.Scale(swimlaneConfig.graph.scale, DiagHub.ScaleType.Right, unitConverter);
                graph.scaleChangedEvent.addEventListener(leftScale.onScaleChanged.bind(leftScale));
                graph.scaleChangedEvent.addEventListener(rightScale.onScaleChanged.bind(rightScale));
                var swimlane = new DiagHub.SwimlaneBase(swimlaneConfig.header, swimlaneConfig.graph.height, currentTimespan, selectionTimespan);
                graph.scaleChangedEvent.addEventListener(swimlane.onScaleChanged.bind(swimlane));
                swimlane.addTitleControl(new DiagHub.Legend(swimlaneConfig.graph.legend));
                swimlane.addMainRegionControl(new DiagHub.SelectionOverlay(graph, currentTimespan, selectionTimespan));
                swimlane.addMainRegionControl(new DiagHub.GridLineRenderer(currentTimespan));
                swimlane.addLeftRegionControl(leftScale);
                swimlane.addRightRegionControl(rightScale);
                return swimlane;
            }
            Swimlanes.ManagedMemorySwimlaneFactory = ManagedMemorySwimlaneFactory;
        })(Swimlanes = ManagedMemoryAnalyzer.Swimlanes || (ManagedMemoryAnalyzer.Swimlanes = {}));
    })(ManagedMemoryAnalyzer = Debugger.ManagedMemoryAnalyzer || (Debugger.ManagedMemoryAnalyzer = {}));
})(Debugger || (Debugger = {}));

// SIG // Begin signature block
// SIG // MIIkbAYJKoZIhvcNAQcCoIIkXTCCJFkCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // qC2KWqZgiuQcPKYoMG/GDcwJ23abWwWyfWHFlomo7s6g
// SIG // gg2BMIIF/zCCA+egAwIBAgITMwAAAQNeJRyZH6MeuAAA
// SIG // AAABAzANBgkqhkiG9w0BAQsFADB+MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBT
// SIG // aWduaW5nIFBDQSAyMDExMB4XDTE4MDcxMjIwMDg0OFoX
// SIG // DTE5MDcyNjIwMDg0OFowdDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEeMBwGA1UEAxMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // 0ZR2NuaGqzb+aflGfIuIUMuQcH+wVakkHX455wWfD6x7
// SIG // l7LOcwr71JskXBa1Od0bfjNsEfw7JvOYql1Ta6rD7BO4
// SIG // 0u/PV3/MZcuvTS4ysVYrTjQHif5pIb0+RPveEp2Fv3x2
// SIG // hn1ysXabYeaKZExGzrbVOox3k3dnIZy2WgZeR4b1PNEJ
// SIG // yg09zbLpoVB40YSI4gE8IvyvlgjMXZnA7eulWpiS9chA
// SIG // Tmpzr97jdHrTX0aXvOJnKHeZrMEOMRaPAA8B/kteVA/K
// SIG // xGU/CuOjRtv2LAM6Gb5oBRac5n80v6eHjWU5Jslj1O/F
// SIG // 3b0l/v0o9DSGeawq1V8wkTvkFGrrscoEIwIDAQABo4IB
// SIG // fjCCAXowHwYDVR0lBBgwFgYKKwYBBAGCN0wIAQYIKwYB
// SIG // BQUHAwMwHQYDVR0OBBYEFEe+wMvhpj/9ZdY48gNdt693
// SIG // 90D/MFAGA1UdEQRJMEekRTBDMSkwJwYDVQQLEyBNaWNy
// SIG // b3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEWMBQG
// SIG // A1UEBRMNMjMwMDEyKzQzNzk2NTAfBgNVHSMEGDAWgBRI
// SIG // bmTlUAXTgqoXNzcitW2oynUClTBUBgNVHR8ETTBLMEmg
// SIG // R6BFhkNodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // b3BzL2NybC9NaWNDb2RTaWdQQ0EyMDExXzIwMTEtMDct
// SIG // MDguY3JsMGEGCCsGAQUFBwEBBFUwUzBRBggrBgEFBQcw
// SIG // AoZFaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9w
// SIG // cy9jZXJ0cy9NaWNDb2RTaWdQQ0EyMDExXzIwMTEtMDct
// SIG // MDguY3J0MAwGA1UdEwEB/wQCMAAwDQYJKoZIhvcNAQEL
// SIG // BQADggIBAJ/1yVMNPw0m7KJE2A3Rn2OWBks/HlzFM6Ok
// SIG // w2yvH8ABuutl7J4zEA+nrFvUvZBhF+cx58MmtKz1J9NI
// SIG // k4aI/hI1kWQi0WstO6gsFZQp0jeW5jX/DM7IBhYWniSx
// SIG // 4jn5bg542AwbtilgJ3Y0JJvduZd1ywE7rYISFiKAiRWE
// SIG // u5hQILAXJoZJr859RRVDNJbPgVwYLNST8mer4nPIPaPN
// SIG // /DIeYBzpsBsw+yy7By6WhJNFKFRczZb9oNuB2LYwykOx
// SIG // 80jAskYcXV52Klif1O7y9PpITLVhi7CMQemquJ2Q9P9q
// SIG // Qg+5PukO7JT8jYC7eOMjp3hbsm0f+VnBfbbROcl54IMc
// SIG // YAraPbDR7Ta/RQfpGzZu5T07BQOn1KclEo/mdqMTs0Va
// SIG // QzGC2tiErrmwH3X19h19URE3J+i1NYRx91eqrvqJccmY
// SIG // 0p5aZHa+jMN9FWqR8RT08tk1Mbjbcvq0dciIm2q/mEXH
// SIG // ZrLX/86SkHXk6+aG0sgb2yfAW5VvSW9YXWkq3lNL+OjK
// SIG // e/ZsFfkDGQ8RhapPmr+qV91gxvVxIPRRqJrK6dHrNEc9
// SIG // dfoi7FU/ahk5axDpWj+O9CN4MLLypjjLNY2qmFkkQLg6
// SIG // Z6QHX6D+2DtJE/sM4e0LbYNQzvB/PuDZCOiMIUpBwt7r
// SIG // jlvuA8Mdbm7mVDVmZ3J8GupS9iLEcj+uMIIHejCCBWKg
// SIG // AwIBAgIKYQ6Q0gAAAAAAAzANBgkqhkiG9w0BAQsFADCB
// SIG // iDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEyMDAGA1UEAxMpTWlj
// SIG // cm9zb2Z0IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5
// SIG // IDIwMTEwHhcNMTEwNzA4MjA1OTA5WhcNMjYwNzA4MjEw
// SIG // OTA5WjB+MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSgwJgYDVQQD
// SIG // Ex9NaWNyb3NvZnQgQ29kZSBTaWduaW5nIFBDQSAyMDEx
// SIG // MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA
// SIG // q/D6chAcLq3YbqqCEE00uvK2WCGfQhsqa+laUKq4Bjga
// SIG // BEm6f8MMHt03a8YS2AvwOMKZBrDIOdUBFDFC04kNeWSH
// SIG // fpRgJGyvnkmc6Whe0t+bU7IKLMOv2akrrnoJr9eWWcpg
// SIG // GgXpZnboMlImEi/nqwhQz7NEt13YxC4Ddato88tt8zpc
// SIG // oRb0RrrgOGSsbmQ1eKagYw8t00CT+OPeBw3VXHmlSSnn
// SIG // Db6gE3e+lD3v++MrWhAfTVYoonpy4BI6t0le2O3tQ5GD
// SIG // 2Xuye4Yb2T6xjF3oiU+EGvKhL1nkkDstrjNYxbc+/jLT
// SIG // swM9sbKvkjh+0p2ALPVOVpEhNSXDOW5kf1O6nA+tGSOE
// SIG // y/S6A4aN91/w0FK/jJSHvMAhdCVfGCi2zCcoOCWYOUo2
// SIG // z3yxkq4cI6epZuxhH2rhKEmdX4jiJV3TIUs+UsS1Vz8k
// SIG // A/DRelsv1SPjcF0PUUZ3s/gA4bysAoJf28AVs70b1FVL
// SIG // 5zmhD+kjSbwYuER8ReTBw3J64HLnJN+/RpnF78IcV9uD
// SIG // jexNSTCnq47f7Fufr/zdsGbiwZeBe+3W7UvnSSmnEyim
// SIG // p31ngOaKYnhfsi+E11ecXL93KCjx7W3DKI8sj0A3T8Hh
// SIG // hUSJxAlMxdSlQy90lfdu+HggWCwTXWCVmj5PM4TasIgX
// SIG // 3p5O9JawvEagbJjS4NaIjAsCAwEAAaOCAe0wggHpMBAG
// SIG // CSsGAQQBgjcVAQQDAgEAMB0GA1UdDgQWBBRIbmTlUAXT
// SIG // gqoXNzcitW2oynUClTAZBgkrBgEEAYI3FAIEDB4KAFMA
// SIG // dQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAfBgNVHSMEGDAWgBRyLToCMZBDuRQFTuHqp8cx
// SIG // 0SOJNDBaBgNVHR8EUzBRME+gTaBLhklodHRwOi8vY3Js
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9N
// SIG // aWNSb29DZXJBdXQyMDExXzIwMTFfMDNfMjIuY3JsMF4G
// SIG // CCsGAQUFBwEBBFIwUDBOBggrBgEFBQcwAoZCaHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNS
// SIG // b29DZXJBdXQyMDExXzIwMTFfMDNfMjIuY3J0MIGfBgNV
// SIG // HSAEgZcwgZQwgZEGCSsGAQQBgjcuAzCBgzA/BggrBgEF
// SIG // BQcCARYzaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
// SIG // aW9wcy9kb2NzL3ByaW1hcnljcHMuaHRtMEAGCCsGAQUF
// SIG // BwICMDQeMiAdAEwAZQBnAGEAbABfAHAAbwBsAGkAYwB5
// SIG // AF8AcwB0AGEAdABlAG0AZQBuAHQALiAdMA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQBn8oalmOBUeRou09h0ZyKbC5YR4WOS
// SIG // mUKWfdJ5DJDBZV8uLD74w3LRbYP+vj/oCso7v0epo/Np
// SIG // 22O/IjWll11lhJB9i0ZQVdgMknzSGksc8zxCi1LQsP1r
// SIG // 4z4HLimb5j0bpdS1HXeUOeLpZMlEPXh6I/MTfaaQdION
// SIG // 9MsmAkYqwooQu6SpBQyb7Wj6aC6VoCo/KmtYSWMfCWlu
// SIG // WpiW5IP0wI/zRive/DvQvTXvbiWu5a8n7dDd8w6vmSiX
// SIG // mE0OPQvyCInWH8MyGOLwxS3OW560STkKxgrCxq2u5bLZ
// SIG // 2xWIUUVYODJxJxp/sfQn+N4sOiBpmLJZiWhub6e3dMNA
// SIG // BQamASooPoI/E01mC8CzTfXhj38cbxV9Rad25UAqZaPD
// SIG // XVJihsMdYzaXht/a8/jyFqGaJ+HNpZfQ7l1jQeNbB5yH
// SIG // PgZ3BtEGsXUfFL5hYbXw3MYbBL7fQccOKO7eZS/sl/ah
// SIG // XJbYANahRr1Z85elCUtIEJmAH9AAKcWxm6U/RXceNcbS
// SIG // oqKfenoi+kiVH6v7RyOA9Z74v2u3S5fi63V4GuzqN5l5
// SIG // GEv/1rMjaHXmr/r8i+sLgOppO6/8MO0ETI7f33VtY5E9
// SIG // 0Z1WTk+/gFcioXgRMiF670EKsT/7qMykXcGhiJtXcVZO
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFkMw
// SIG // ghY/AgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAEDXiUcmR+jHrgAAAAAAQMwDQYJYIZI
// SIG // AWUDBAIBBQCggcQwGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEIF7S8tfwUU9Jq5tPykg0
// SIG // kJBngIIOFVYltL0n72bM1qwxMFgGCisGAQQBgjcCAQwx
// SIG // SjBIoCqAKABtAGEAbgBhAGcAZQBkAGgAZQBhAHAAdgBp
// SIG // AGUAdwBlAHIALgBqAHOhGoAYaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAKTBz2/Y
// SIG // wMVy0wvvw6a5KRdObGeoM9cBknTw+q5nwonVc+RfepOm
// SIG // GzoraFTDm8rj3tWTuNhSJAeZGDNlOKMgkimzzpXO0SCi
// SIG // 9WD+3N3ZMmRCgrqMt7p0O6dkomF6I6qIAyP3/raCo2pr
// SIG // aTN9bZP7Aka8CrY3arXV3k/L4TYKTK3KBqwFRfaBVbCW
// SIG // mdRN5mHZE5Bwuw+LF/wBV3HYE8oHJj2JGsvgJh+Cwfyb
// SIG // sRoGz6/R0PuyEDI3hkmG5ot4Rnb0u/uNLHnZlZqg9omI
// SIG // 81t8WXHefohlONcJGBb+9pi7Ql2OsJtE1A/nVMroU1Z0
// SIG // MjT6TS72u3vrV7w/KthYLH4w5XKhghO3MIITswYKKwYB
// SIG // BAGCNwMDATGCE6MwghOfBgkqhkiG9w0BBwKgghOQMIIT
// SIG // jAIBAzEPMA0GCWCGSAFlAwQCAQUAMIIBWAYLKoZIhvcN
// SIG // AQkQAQSgggFHBIIBQzCCAT8CAQEGCisGAQQBhFkKAwEw
// SIG // MTANBglghkgBZQMEAgEFAAQgak9cfyv7cLKvaslaNU40
// SIG // yVeNFa92Hucl/xbKtto3YTgCBlx27xwdqxgTMjAxOTAz
// SIG // MTUxOTE5MTAuODAzWjAHAgEBgAIB9KCB1KSB0TCBzjEL
// SIG // MAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24x
// SIG // EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UECxMgTWljcm9z
// SIG // b2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJpY28xJjAkBgNV
// SIG // BAsTHVRoYWxlcyBUU1MgRVNOOkY1MjgtMzc3Ny04QTc2
// SIG // MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBT
// SIG // ZXJ2aWNloIIPHzCCBPUwggPdoAMCAQICEzMAAADRmM/k
// SIG // PJklZIQAAAAAANEwDQYJKoZIhvcNAQELBQAwfDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBIDIwMTAwHhcNMTgwODIzMjAy
// SIG // NjMzWhcNMTkxMTIzMjAyNjMzWjCBzjELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEpMCcGA1UECxMgTWljcm9zb2Z0IE9wZXJh
// SIG // dGlvbnMgUHVlcnRvIFJpY28xJjAkBgNVBAsTHVRoYWxl
// SIG // cyBUU1MgRVNOOkY1MjgtMzc3Ny04QTc2MSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNlMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7wDO
// SIG // xEyGqfaSKQqEPfMK7QKtk1H+sj/kyTnn6kQtbiyktUBL
// SIG // YnmL2kiYX38v6EJYHX5UAGvU7pnskuxwvI1Af2H7jbm4
// SIG // PD+P02K9lx1iFAdLlpdQauWD6EEjTipN1VdUWIvPtCc5
// SIG // 04JBZZPfjG7CIMVJNTek0PfMFNTOC0cbYMe5n0pgIEFA
// SIG // jmH4OmlJOsiXaGs2iLaHTjy3rz6TMLNlvG1wMHkl2+c+
// SIG // SWYlbR6JoFQ0sNAEn6qKxGgR7kpddQlu9wVKHjRLU8cX
// SIG // mEpJIxrZ3Owr7tTs31JcyVrlZg4ayFlIP04qI3NHbiLq
// SIG // A1jEfHaquR7FbqPYz84KPzNykyrH/wIDAQABo4IBGzCC
// SIG // ARcwHQYDVR0OBBYEFIP7EkVwNv9nibpQi93Jxj1U82oM
// SIG // MB8GA1UdIwQYMBaAFNVjOlyKMZDzQ3t8RhvFM2hahW1V
// SIG // MFYGA1UdHwRPME0wS6BJoEeGRWh0dHA6Ly9jcmwubWlj
// SIG // cm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3RzL01pY1Rp
// SIG // bVN0YVBDQV8yMDEwLTA3LTAxLmNybDBaBggrBgEFBQcB
// SIG // AQROMEwwSgYIKwYBBQUHMAKGPmh0dHA6Ly93d3cubWlj
// SIG // cm9zb2Z0LmNvbS9wa2kvY2VydHMvTWljVGltU3RhUENB
// SIG // XzIwMTAtMDctMDEuY3J0MAwGA1UdEwEB/wQCMAAwEwYD
// SIG // VR0lBAwwCgYIKwYBBQUHAwgwDQYJKoZIhvcNAQELBQAD
// SIG // ggEBADrgMufapAT0iR6YGdEleg09nyLZRqYv1LLOfaQR
// SIG // HBW4FniWuU2Ndx3MYQXAqmfG3DicdvB3JpTEN/bo27R9
// SIG // wYDT7xgmqKfFblG7yvS4ttuf/kMISGegL94YS1CSBBUL
// SIG // ammK6Vr5STlFJOr8D3TGdPviOciAZC4L22m3MubLcsdg
// SIG // EY5towI/EVpWR5r0EvzunGeTykYUX/Tr00UhkZvk6MwI
// SIG // mCSrLJwcRv4qT4f8lPR+6rJ2SfwJeTyWtX8x6GVr6MRw
// SIG // YtbYNIF0z0SmrzhmfjLDNT2zZGLrcp940BF++Qs1NaIN
// SIG // HA+GiBXs7o7pjXvX7Vs6jhGCBYV18Bf8laWayigwggZx
// SIG // MIIEWaADAgECAgphCYEqAAAAAAACMA0GCSqGSIb3DQEB
// SIG // CwUAMIGIMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQD
// SIG // EylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHkgMjAxMDAeFw0xMDA3MDEyMTM2NTVaFw0yNTA3
// SIG // MDEyMTQ2NTVaMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
// SIG // AQEAqR0NvHcRijog7PwTl/X6f2mUa3RUENWlCgCChfvt
// SIG // fGhLLF/Fw+Vhwna3PmYrW/AVUycEMR9BGxqVHc4JE458
// SIG // YTBZsTBED/FgiIRUQwzXTbg4CLNC3ZOs1nMwVyaCo0UN
// SIG // 0Or1R4HNvyRgMlhgRvJYR4YyhB50YWeRX4FUsc+TTJLB
// SIG // xKZd0WETbijGGvmGgLvfYfxGwScdJGcSchohiq9LZIlQ
// SIG // YrFd/XcfPfBXday9ikJNQFHRD5wGPmd/9WbAA5ZEfu/Q
// SIG // S/1u5ZrKsajyeioKMfDaTgaRtogINeh4HLDpmc085y9E
// SIG // uqf03GS9pAHBIAmTeM38vMDJRF1eFpwBBU8iTQIDAQAB
// SIG // o4IB5jCCAeIwEAYJKwYBBAGCNxUBBAMCAQAwHQYDVR0O
// SIG // BBYEFNVjOlyKMZDzQ3t8RhvFM2hahW1VMBkGCSsGAQQB
// SIG // gjcUAgQMHgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAP
// SIG // BgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaAFNX2VsuP
// SIG // 6KJcYmjRPZSQW9fOmhjEMFYGA1UdHwRPME0wS6BJoEeG
// SIG // RWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIz
// SIG // LmNybDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKG
// SIG // Pmh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2Vy
// SIG // dHMvTWljUm9vQ2VyQXV0XzIwMTAtMDYtMjMuY3J0MIGg
// SIG // BgNVHSABAf8EgZUwgZIwgY8GCSsGAQQBgjcuAzCBgTA9
// SIG // BggrBgEFBQcCARYxaHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL1BLSS9kb2NzL0NQUy9kZWZhdWx0Lmh0bTBABggr
// SIG // BgEFBQcCAjA0HjIgHQBMAGUAZwBhAGwAXwBQAG8AbABp
// SIG // AGMAeQBfAFMAdABhAHQAZQBtAGUAbgB0AC4gHTANBgkq
// SIG // hkiG9w0BAQsFAAOCAgEAB+aIUQ3ixuCYP4FxAz2do6Eh
// SIG // b7Prpsz1Mb7PBeKp/vpXbRkws8LFZslq3/Xn8Hi9x6ie
// SIG // JeP5vO1rVFcIK1GCRBL7uVOMzPRgEop2zEBAQZvcXBf/
// SIG // XPleFzWYJFZLdO9CEMivv3/Gf/I3fVo/HPKZeUqRUgCv
// SIG // OA8X9S95gWXZqbVr5MfO9sp6AG9LMEQkIjzP7QOllo9Z
// SIG // Kby2/QThcJ8ySif9Va8v/rbljjO7Yl+a21dA6fHOmWaQ
// SIG // jP9qYn/dxUoLkSbiOewZSnFjnXshbcOco6I8+n99lmqQ
// SIG // eKZt0uGc+R38ONiU9MalCpaGpL2eGq4EQoO4tYCbIjgg
// SIG // tSXlZOz39L9+Y1klD3ouOVd2onGqBooPiRa6YacRy5rY
// SIG // DkeagMXQzafQ732D8OE7cQnfXXSYIghh2rBQHm+98eEA
// SIG // 3+cxB6STOvdlR3jo+KhIq/fecn5ha293qYHLpwmsObvs
// SIG // xsvYgrRyzR30uIUBHoD7G4kqVDmyW9rIDVWZeodzOwjm
// SIG // mC3qjeAzLhIp9cAvVCch98isTtoouLGp25ayp0Kiyc8Z
// SIG // QU3ghvkqmqMRZjDTu3QyS99je/WZii8bxyGvWbWu3EQ8
// SIG // l1Bx16HSxVXjad5XwdHeMMD9zOZN+w2/XU/pnR4ZOC+8
// SIG // z1gFLu8NoFA12u8JJxzVs341Hgi62jbb01+P3nSISRKh
// SIG // ggOtMIIClQIBATCB/qGB1KSB0TCBzjELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEpMCcGA1UECxMgTWljcm9zb2Z0IE9wZXJh
// SIG // dGlvbnMgUHVlcnRvIFJpY28xJjAkBgNVBAsTHVRoYWxl
// SIG // cyBUU1MgRVNOOkY1MjgtMzc3Ny04QTc2MSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNloiUK
// SIG // AQEwCQYFKw4DAhoFAAMVAEpczNJOr+lrEQJ6hpddUbl2
// SIG // tlTxoIHeMIHbpIHYMIHVMQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MSkwJwYDVQQLEyBNaWNyb3NvZnQgT3BlcmF0aW9ucyBQ
// SIG // dWVydG8gUmljbzEnMCUGA1UECxMebkNpcGhlciBOVFMg
// SIG // RVNOOjRERTktMEM1RS0zRTA5MSswKQYDVQQDEyJNaWNy
// SIG // b3NvZnQgVGltZSBTb3VyY2UgTWFzdGVyIENsb2NrMA0G
// SIG // CSqGSIb3DQEBBQUAAgUA4DWZqjAiGA8yMDE5MDMxNTEx
// SIG // MjUzMFoYDzIwMTkwMzE2MTEyNTMwWjB0MDoGCisGAQQB
// SIG // hFkKBAExLDAqMAoCBQDgNZmqAgEAMAcCAQACAgqyMAcC
// SIG // AQACAhqsMAoCBQDgNusqAgEAMDYGCisGAQQBhFkKBAIx
// SIG // KDAmMAwGCisGAQQBhFkKAwGgCjAIAgEAAgMW42ChCjAI
// SIG // AgEAAgMHoSAwDQYJKoZIhvcNAQEFBQADggEBACERgI15
// SIG // pGw20+rHl76PrtEd3nvYcx+TDp2Phw3/VP3RNnxXI/md
// SIG // 5qGKKEt02798AxKR8fMEJpdDFmjDS/7lRB3nZKTGI/By
// SIG // oAWZNGJ6BaNVPewrGUbTrIkPMlk4nqJsvRA/orYpk2WL
// SIG // 3j0DZUKqq1fcmJpC/AnVIxS0MjERHrs3QMA+V/EbOpE5
// SIG // MZ/v6dDoZ1XHfDM7oMTa5Edm7+anuGO8CcMGnLgbaUhS
// SIG // EYDt99nrf6JD7RQvfeDGSI3iyP7cxc2M9ohDU+RcNxDt
// SIG // Du2wSXsHYkLwwbfbUs/zyjcY/CvCiVFCzfSUKRUKwBk3
// SIG // 2jaWbOcQ+qkTjpZ6VLyx2ytvFxsxggL1MIIC8QIBATCB
// SIG // kzB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1N
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAITMwAA
// SIG // ANGYz+Q8mSVkhAAAAAAA0TANBglghkgBZQMEAgEFAKCC
// SIG // ATIwGgYJKoZIhvcNAQkDMQ0GCyqGSIb3DQEJEAEEMC8G
// SIG // CSqGSIb3DQEJBDEiBCDaYoG8tF2CF/gybsYxxpEsRAlG
// SIG // 4SwqTolRmRKhc0d/NTCB4gYLKoZIhvcNAQkQAgwxgdIw
// SIG // gc8wgcwwgbEEFEpczNJOr+lrEQJ6hpddUbl2tlTxMIGY
// SIG // MIGApH4wfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAC
// SIG // EzMAAADRmM/kPJklZIQAAAAAANEwFgQUm/qs05w+Ageb
// SIG // 5YTn0sCtMxAI95MwDQYJKoZIhvcNAQELBQAEggEAB4o6
// SIG // OPfjBBEo8fSwkoJgMwgucFHrPZdyGE75u92wfqnoSNCG
// SIG // 6DYqW/5qZ4/QbWqLJrQ550hOde1RiZm66PaEdPsNyhZh
// SIG // oSeuaJ04/gd63bHF4tVfEydG9M5X8aaCSnH3dBRgd7Fg
// SIG // UKmfYf8DZOdb0qOJWXppdkDs/EErD/Gu/mWSjjNMShrD
// SIG // u7WPK/8y8Iq6ygca6N2la2H4cWLFIkTw3KlPJTn1j6e9
// SIG // UAzFtrk4bDZqZ3GaXYQYSG1rrY5q63T9vc6dNe1qb1ri
// SIG // 0USsPzMxk1pIDx+dbRkQHwNoR6pmgMxW7o7j7a8/uOGZ
// SIG // lb4OV0PEIdR32bH9mlwlAiyUGe3hwQ==
// SIG // End signature block
