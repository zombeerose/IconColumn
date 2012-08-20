/**
 * A Grid column type which renders the dataIndex value as an image.
 * 
 * Notes:
 * 
 * - Compatible with Ext 4.x
 * - The icon column can be at any index in the columns array, and a grid can have any number of icon columns.
 * 
 * Example usage:
        var grid = Ext.create('Ext.grid.Panel',{
            columns: [{
                dataIndex: 'icon_cls',
                xtype: 'dvp_iconcolumn'
            },{
               ...
            ]}
            ...
        });
 * 
 * @author Phil Crawford
 * @license Licensed under the terms of the Open Source [LGPL 3.0 license](http://www.gnu.org/licenses/lgpl.html).  Commercial use is permitted to the extent that the code/component(s) do NOT become part of another Open Source or Commercially licensed development library or toolkit without explicit permission.
 * @version 0.5 (July 5, 2011) Ext4
 * @param {Object} config 
 */
Ext.define('Ext.ux.grid.column.Icon', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.dvp_iconcolumn',
    
    /**
     * @cfg {String} altText The alt text to use for the image element. Defaults to <tt>''</tt>.
     */
    altText: '',    
    
    fixed: true,    
    
    /**
     * @cfg {Function} getClass A function which returns the CSS class to apply to the icon image.
     * The function is passed the following parameters:<ul>
     *     <li><b>v</b> : Object<p class="sub-desc">The value of the column's configured field (if any).</p></li>
     *     <li><b>metadata</b> : Object<p class="sub-desc">An object in which you may set the following attributes:<ul>
     *         <li><b>css</b> : String<p class="sub-desc">A CSS class name to add to the cell's TD element.</p></li>
     *         <li><b>attr</b> : String<p class="sub-desc">An HTML attribute definition string to apply to the data container element <i>within</i> the table cell
     *         (e.g. 'style="color:red;"').</p></li>
     *     </ul></p></li>
     *     <li><b>r</b> : Ext.data.Record<p class="sub-desc">The Record providing the data.</p></li>
     *     <li><b>rowIndex</b> : Number<p class="sub-desc">The row index..</p></li>
     *     <li><b>colIndex</b> : Number<p class="sub-desc">The column index.</p></li>
     *     <li><b>store</b> : Ext.data.Store<p class="sub-desc">The Store which is providing the data Model.</p></li>
     * </ul>
     */
    
    /**
     * @cfg {Function} getTip A function which returns the tooltip to apply to the icon image.
     * The function is passed the following parameters:<ul>
     *     <li><b>v</b> : Object<p class="sub-desc">The value of the column's configured field (if any).</p></li>
     *     <li><b>metadata</b> : Object<p class="sub-desc">An object in which you may set the following attributes:<ul>
     *         <li><b>css</b> : String<p class="sub-desc">A CSS class name to add to the cell's TD element.</p></li>
     *         <li><b>attr</b> : String<p class="sub-desc">An HTML attribute definition string to apply to the data container element <i>within</i> the table cell
     *         (e.g. 'style="color:red;"').</p></li>
     *     </ul></p></li>
     *     <li><b>r</b> : Ext.data.Record<p class="sub-desc">The Record providing the data.</p></li>
     *     <li><b>rowIndex</b> : Number<p class="sub-desc">The row index..</p></li>
     *     <li><b>colIndex</b> : Number<p class="sub-desc">The column index.</p></li>
     *     <li><b>store</b> : Ext.data.Store<p class="sub-desc">The Store which is providing the data Model.</p></li>
     * </ul>
     */
    
    groupable: false,
    
    /**
     * @cfg {String} icon
     * The URL of an image to display in the column. 
     * Optional - defaults to <code>{@link Ext#BLANK_IMAGE_URL Ext.BLANK_IMAGE_URL}</code>.
     */
    
    /**
     * @cfg {String} iconCls
     * A CSS class to apply to the icon image. To determine the class dynamically, configure the Column with a <code>{@link #getClass}</code> function.
     */
    
    menuDisabled: true,
    
    /**
     * @cfg {Object} scope
     * Optional. The scope in which to execute the getClass and getTip functions. 
     * Defaults to this.
     */
    
    sortable: false,    
    
    text: 'Icon',
    
    /**
     * @cfg {String} tooltip 
     * A tooltip message to be displayed on hover. {@link Ext.tip.QuickTipManager#init} must have been initialized.
     */
    
    /**
     * @param {String} value
     * @param {Object} meta
     * @param {Ext.data.Model} record
     * @return {String}
     */
    defaultRenderer : function(v, meta, record){
        var me = this,
            tip = me.tooltip ? me.tooltip : (Ext.isFunction(me.getTip) ? me.getTip.apply(me.scope||me, arguments) : '');
            
        meta.tdCls += ' ' + Ext.baseCSSPrefix + 'action-col-cell ' + Ext.baseCSSPrefix + 'icon-col-cell';
        v = '<img alt="' + me.altText + '" src="' + (me.icon || Ext.BLANK_IMAGE_URL) +
            '" class="' + Ext.baseCSSPrefix + 'action-col-icon ' + (me.iconCls || '') +
            ' ' + (Ext.isFunction(me.getClass) ? me.getClass.apply(me.scope||me, arguments) : '') +
            ' ' + (me.dataIndex ? record.get(me.dataIndex) : '') + '"' +
            ((tip) ? ' data-qtip="' + tip + '"' : '') + ' />';
            
        return v;
    } //eof     
}); //eo extend

//end of file