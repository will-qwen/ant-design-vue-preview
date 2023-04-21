"use strict";(self["webpackChunkant_desigin_vue_again"]=self["webpackChunkant_desigin_vue_again"]||[]).push([[788],{72788:function(e,o,r){r.r(o),r.d(o,{default:function(){return s}});var t=function(){var e=this,o=e._self._c;return["input","textarea","date","time","number","radio","checkbox","customSelect","select","rate","switch","slider","uploadImg","uploadFile","cascader","treeSelect"].includes(e.record.type)?o("a-form-item",{attrs:{label:e.record.label,title:e.record.label,"label-col":"horizontal"===e.formConfig.layout?e.formConfig.labelCol:{},"wrapper-col":"horizontal"===e.formConfig.layout?e.formConfig.wrapperCol:{}}},["input"===e.record.type?o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.record.model,{initialValue:e.record.options.defaultValue,rules:e.record.rules}],expression:"[\n                record.model, // input 的 name\n                {\n                    initialValue: record.options.defaultValue, // 默认值\n                    rules: record.rules // 验证规则\n                }\n            ]"}],style:`width:${e.record.options.width}`,attrs:{disabled:e.disabled||e.record.options.disabled,placeholder:e.record.options.placeholder,type:e.record.options.type,allowClear:e.record.options.clearable,maxLength:e.record.options.maxLength,addonBefore:e.record.options.prefix,addonAfter:e.record.options.suffix},on:{change:function(o){return e.handleChange(o.target.value,e.record.model)}}}):"textarea"===e.record.type?o("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.record.model,{initialValue:e.record.options.defaultValue,rules:e.record.rules}],expression:"[\n                record.model, // input 的 name\n                {\n                    initialValue: record.options.defaultValue, // 默认值\n                    rules: record.rules // 验证规则\n                }\n            ]"}],style:`width:${e.record.options.width}`,attrs:{autoSize:{minRows:e.record.options.minRows,maxRows:e.record.options.maxRows},disabled:e.disabled||e.record.options.disabled,placeholder:e.record.options.placeholder,allowClear:e.record.options.clearable,maxLength:e.record.options.maxLength,rows:4},on:{change:function(o){return e.handleChange(o.target.value,e.record.model)}}}):"number"===e.record.type?o("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.record.model,{initialValue:e.record.options.defaultValue,rules:e.record.rules}],expression:"[\n                record.model,\n                {\n                    initialValue: record.options.defaultValue,\n                    rules: record.rules\n                }\n            ]"}],style:`width:${e.record.options.width}`,attrs:{min:e.record.options.min||0===e.record.options.min?e.record.options.min:-1/0,max:e.record.options.max||0===e.record.options.max?e.record.options.max:1/0,disabled:e.disabled||e.record.options.disabled,allowClear:e.record.options.clearable,step:e.record.options.step,precision:e.record.options.precision>50||!e.record.options.precision&&0!==e.record.options.precision?null:e.record.options.precision,placeholder:e.record.options.placeholder,formatter:e.record.options.formatter},on:{change:function(o){return e.handleChange(o,e.record.model)}}}):"radio"===e.record.type?o("DictSelectTag",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.record.model,{initialValue:e.record.options.defaultValue,rules:e.record.rules}],expression:"[\n                record.model,\n                {\n                    initialValue: record.options.defaultValue,\n                    rules: record.rules\n                }\n            ]"}],attrs:{disabled:e.disabled||e.record.options.disabled,placeholder:e.record.options.placeholder,dataType:e.record.options.dataType,url:e.record.options.url,dataList:e.record.options.options,method:e.record.options.method,params:e.record.options.dynamicKey,dictCode:e.record.options.dictCode,valueFeild:e.record.options.valueFeild,textFeild:e.record.options.textFeild,allowClear:e.record.options.clearable,type:"radio"},on:{change:function(o){return e.handleChange(o,e.record.model)}}}):"rate"===e.record.type?o("a-rate",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.record.model,{initialValue:e.record.options.defaultValue,rules:e.record.rules}],expression:"[\n                record.model,\n                {\n                    initialValue: record.options.defaultValue,\n                    rules: record.rules\n                }\n            ]"}],attrs:{count:e.record.options.max,disabled:e.disabled||e.record.options.disabled,placeholder:e.record.options.placeholder,allowHalf:e.record.options.allowHalf,allowClear:e.record.options.clearable},on:{change:function(o){return e.handleChange(o,e.record.model)}}}):"select"!==e.record.type||e.record.options.multiple?"switch"===e.record.type?o("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.record.model,{initialValue:e.record.options.defaultValue,valuePropName:"checked",rules:e.record.rules}],expression:"[\n                record.model,\n                {\n                    initialValue: record.options.defaultValue,\n                    valuePropName: 'checked',\n                    rules: record.rules\n                }\n            ]"}],attrs:{disabled:e.disabled||e.record.options.disabled},on:{change:function(o){return e.handleChange(o,e.record.model)}}}):"slider"===e.record.type?o("div",{staticClass:"slider-box",style:`width:${e.record.options.width}`},[o("div",{staticClass:"slider"},[o("a-slider",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.record.model,{initialValue:e.record.options.defaultValue,rules:e.record.rules}],expression:"[record.model, { initialValue: record.options.defaultValue, rules: record.rules }]"}],attrs:{disabled:e.disabled||e.record.options.disabled,min:e.record.options.min,max:e.record.options.max,step:e.record.options.step,vertical:e.record.options.vertical}})],1),e.record.options.showInput?o("div",{staticClass:"number"},[o("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.record.model,{initialValue:e.record.options.defaultValue}],expression:"[\n                        record.model,\n                        {\n                            initialValue: record.options.defaultValue\n                        }\n                    ]"}],staticStyle:{width:"100%"},attrs:{disabled:e.disabled||e.record.options.disabled,min:e.record.options.min,max:e.record.options.max,step:e.record.options.step},on:{change:function(o){return e.handleChange(o,e.record.model)}}})],1):e._e()]):e._e():o("DictSelectTag",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.record.model,{initialValue:e.record.options.defaultValue,rules:e.record.rules}],expression:"[\n                record.model,\n                {\n                    initialValue: record.options.defaultValue,\n                    rules: record.rules\n                }\n            ]"}],attrs:{disabled:e.disabled||e.record.options.disabled,placeholder:e.record.options.placeholder,dataType:e.record.options.dataType,getDataType:e.record.options.getDataType,url:e.record.options.url,dataList:e.record.options.options,method:e.record.options.method,params:e.record.options.dynamicKey,dictCode:e.record.options.dictCode,valueFeild:e.record.options.valueFeild,textFeild:e.record.options.textFeild,allowClear:e.record.options.clearable,showSearch:e.record.options.showSearch,type:"select"},on:{change:function(o){return e.handleChange(o,e.record.model)}}})],1):"batch"===e.record.type||"editor"===e.record.type?o("a-form-item",{attrs:{label:e.record.options.showLabel?e.record.label:"","label-col":"horizontal"===e.formConfig.layout&&e.record.options.showLabel?e.formConfig.labelCol:{},"wrapper-col":"horizontal"===e.formConfig.layout&&e.record.options.showLabel?e.formConfig.wrapperCol:{}}},["batch"===e.record.type?o("KBatch",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.record.model,{initialValue:e.record.options.defaultValue,rules:e.record.rules}],expression:"[\n                record.model,\n                {\n                    initialValue: record.options.defaultValue,\n                    rules: record.rules\n                }\n            ]"}],ref:"KBatch",style:`width:${e.record.options.width}`,attrs:{record:e.record,config:e.config,parentDisabled:e.disabled,dynamicData:e.dynamicData},on:{change:function(o){return e.handleChange(o,e.record.model)}}}):o("editor",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.record.model,{initialValue:e.record.options.defaultValue,rules:e.record.rules}],expression:"[\n    record.model,\n    {\n        initialValue: record.options.defaultValue,\n        rules: record.rules\n    }\n]"}],ref:"KEditor",style:`width:${e.record.options.width}`,attrs:{parentDisabled:e.disabled,dynamicData:e.dynamicData,height:e.record.options.height,placeholder:e.record.options.placeholder},on:{onchange:o=>{e.handleChange(o,e.record.model)}}})],1):"button"===e.record.type?o("a-form-item",[o("a-button",{attrs:{disabled:e.disabled||e.record.options.disabled,type:e.record.options.type,ghost:e.record.options.ghost,icon:e.record.options.icon?e.record.options.icon:null,shape:e.record.options.shape?e.record.options.shape:null,size:e.record.options.size,block:e.record.options.block,"html-type":"submit"===e.record.options.handle?"submit":void 0},domProps:{textContent:e._s(e.record.label)},on:{click:function(o){"submit"!==e.record.options.handle&&("reset"===e.record.options.handle?e.$emit("handleReset"):e.dynamicData[e.record.options.dynamicFun]&&e.dynamicData[e.record.options.dynamicFun]())}}})],1):"alert"===e.record.type?o("a-form-item",[o("a-alert",{attrs:{message:e.record.label,description:e.record.options.description,type:e.record.options.type,showIcon:e.record.options.showIcon,closable:e.record.options.closable,banner:e.record.options.banner}})],1):"text"===e.record.type?o("a-form-item",[o("div",{style:{textAlign:e.record.options.textAlign,width:e.record.options.width,lineHeight:e.record.options.lineHeight}},[o("label",{class:{"ant-form-item-required":e.record.options.showRequiredMark,"text-bold":e.record.options.textBold,"text-italic":e.record.options.textItalic,"text-decoration":e.record.options.textUnderline,"text-strikethrough":e.record.options.textStrikethrough},style:{fontSize:e.record.options.textSize+"px !important",color:e.record.options.textColor},domProps:{textContent:e._s(e.record.label)}})])]):"html"===e.record.type?o("div",{domProps:{innerHTML:e._s(e.record.options.defaultValue)}}):["icon","color","userPop","depart","codeTag","area","countdown","map","bizObject","associationbox"].includes(e.record.type)?o("a-form-item",{attrs:{label:e.record.label,"label-col":"horizontal"===e.formConfig.layout?e.formConfig.labelCol:{},"wrapper-col":"horizontal"===e.formConfig.layout?e.formConfig.wrapperCol:{}}}):o("div",["divider"===e.record.type?o("a-divider",{attrs:{orientation:e.record.options.orientation,dashed:e.record.options.dashed}},[e._v(e._s(e.record.label))]):e._e()],1)},d=[],a=r(40187),i={name:"FormItem",props:{record:{type:Object,required:!0},formConfig:{type:Object,required:!0},config:{type:Object,default:()=>({})},dynamicData:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1}},components:{DictSelectTag:a.Z},computed:{customList(){return window.$customComponentList?window.$customComponentList.map((e=>e.type)):[]}},watch:{record:{deep:!0,immediate:!0,handler(e){e.options.defaultValue=e.options.defaultValue?e.options.defaultValue:""}}},mounted(){},methods:{validationSubform(){return!this.$refs.KBatch||this.$refs.KBatch.validationSubform()},handleChange(e,o){if("customSelect"===this.record.type){let r=e[2];r&&(this.record.options.defaultValue=r[this.record.options.backfillSelect]),this.$emit("change",e[0],o,r)}else this.record.options.defaultValue=e,this.$emit("change",e,o)}}},n=i,l=r(1001),c=(0,l.Z)(n,t,d,!1,null,"6190db61",null),s=c.exports}}]);
//# sourceMappingURL=788.b3c7a324.js.map