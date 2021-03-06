/*
 * @moduleName:
 * @Author: dawdler
 * @LastModifiedBy: dawdler
 * @Date: 2019-03-27 15:07:32
 * @LastEditTime: 2020-03-13 16:18:01
 */
import { storiesOf } from '@storybook/vue';
import { withKnobs, array, object } from '@storybook/addon-knobs';
import Vue from 'vue';
// 导入组件库
import ElementUI from 'element-ui';
import ElTreeSelect from '../components/src/ElTreeSelect.vue';
import 'element-ui/lib/theme-chalk/index.css';
// 注册组件库
Vue.use(ElementUI, {
    size: 'small'
});
storiesOf('渲染', module)
    .addDecorator(withKnobs)
    .add('通过props传参数', () => ({
        components: { ElTreeSelect },
        template: `
        <el-row>
            <el-col :span="12">
            <ElTreeSelect v-model="values" :styles="styles" :selectParams="selectParams" :treeParams="treeParams" v-bind.sync="options" ref="treeSelect"></ElTreeSelect>
            </el-col>
            <el-col :span="12">
            当前选中数据ID：{{values}}
            </el-col>
        </el-row>
    `,
        props: {
            options: {
                type: Object,
                default: object('v-bind配置参数', { popoverClass: 'testClass' })
            },
            styles: {
                type: Object,
                default: object('调整样式：', { width: '500px' })
            },
            values: {
                type: [String, Array, Number],
                default: array('v-model配置：', [1, 3])
            },
            selectParams: {
                type: Object,
                default: object('input参数：', {
                    clearable: true,
                    placeholder: '请输入内容'
                })
            },
            treeParams: {
                type: Object,
                default: object('下拉树参数：', {
                    'check-strictly': true,
                    'default-expand-all': true,
                    'expand-on-click-node': false,
                    clickParent: false,
                    filterable: true,
                    data: [
                        {
                            testId: 1,
                            name: '节点1',
                            disabled: true,
                            child: [
                                {
                                    testId: 111111,
                                    name: '子节点'
                                }
                            ]
                        },
                        {
                            testId: 3,
                            name: '节点3'
                        }
                    ],
                    props: {
                        children: 'child',
                        label: 'name',
                        disabled: 'disabled',
                        value: 'testId'
                    }
                })
            }
        }
    }));
