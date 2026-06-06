(function(_0x1b751b,_0x46dab5){const _0x1350a6=_0x3108,_0x22b133=_0x1b751b();while(!![]){try{const _0x12fea9=-parseInt(_0x1350a6(0x2da))/0x1+-parseInt(_0x1350a6(0x2f3))/0x2+parseInt(_0x1350a6(0x32a))/0x3*(-parseInt(_0x1350a6(0x292))/0x4)+-parseInt(_0x1350a6(0x308))/0x5*(parseInt(_0x1350a6(0x1de))/0x6)+-parseInt(_0x1350a6(0x2e3))/0x7*(parseInt(_0x1350a6(0x1fb))/0x8)+-parseInt(_0x1350a6(0x31b))/0x9+-parseInt(_0x1350a6(0x261))/0xa*(-parseInt(_0x1350a6(0x207))/0xb);if(_0x12fea9===_0x46dab5)break;else _0x22b133['push'](_0x22b133['shift']());}catch(_0x4a0b39){_0x22b133['push'](_0x22b133['shift']());}}}(_0x4872,0x93ab2),((()=>{const _0x3ca4b6=_0x3108,_0x27d0b0=window['LitElement']||(customElements[_0x3ca4b6(0x1d8)]('ha-panel-lovelace')?Object[_0x3ca4b6(0x28c)](customElements['get'](_0x3ca4b6(0x1fe))):null);if(!_0x27d0b0||!_0x27d0b0['prototype']||!_0x27d0b0[_0x3ca4b6(0x300)][_0x3ca4b6(0x335)]){console[_0x3ca4b6(0x213)](_0x3ca4b6(0x2e6));return;}const _0x1fd840=_0x27d0b0[_0x3ca4b6(0x300)][_0x3ca4b6(0x335)],_0x470ab4=_0x27d0b0[_0x3ca4b6(0x300)]['css'];function _0x8e952e(_0x994c95){const _0x3659ff=_0x3ca4b6;if(!_0x994c95)return{};if(Array[_0x3659ff(0x1be)](_0x994c95)){const _0x54a5de={};return _0x994c95[_0x3659ff(0x2c8)](_0x1ead7b=>{const _0x570ccd=_0x3659ff;_0x1ead7b&&typeof _0x1ead7b==='object'&&Object[_0x570ccd(0x28e)](_0x54a5de,_0x1ead7b);}),_0x54a5de;}if(typeof _0x994c95===_0x3659ff(0x35b))return _0x994c95;return{};}class _0x50a1b4 extends _0x27d0b0{static get[_0x3ca4b6(0x326)](){return{'hass':{},'_config':{},'_code':{'type':String},'_busy':{'type':Boolean},'_message':{'type':String},'_countdownValue':{'type':Number},'_historyEntries':{'type':Array},'_historyError':{'type':String}};}constructor(){const _0x52074f=_0x3ca4b6;super(),this[_0x52074f(0x314)]={},this[_0x52074f(0x2ac)]='',this[_0x52074f(0x263)]=![],this[_0x52074f(0x320)]='',this['_countdownValue']=null,this[_0x52074f(0x21f)]=null,this[_0x52074f(0x2f1)]=null,this['_countdownTimer']=null,this['_historyEntries']=[],this[_0x52074f(0x218)]=null,this[_0x52074f(0x248)]=null,this['_initialHistoryLoaded']=![],this['_sideMaxHeightPx']=null,this[_0x52074f(0x2ea)]=null,this[_0x52074f(0x297)]=null,this[_0x52074f(0x1d2)]=![];}static async[_0x3ca4b6(0x1dc)](){const _0x454e13=_0x3ca4b6;return!customElements[_0x454e13(0x1d8)](_0x454e13(0x254))&&customElements['define']('alarm-and-security-card-editor',_0x3b9d75),document['createElement'](_0x454e13(0x254));}static['getStubConfig'](){const _0x5c137d=_0x3ca4b6;return{'entity':_0x5c137d(0x344),'title':_0x5c137d(0x229),'colors':{'disarm_active':_0x5c137d(0x339),'disarm_inactive':_0x5c137d(0x1eb),'disarming':_0x5c137d(0x1e6),'armed_away':_0x5c137d(0x2ef),'armed_stay':_0x5c137d(0x1e0),'armed_night':_0x5c137d(0x1e0),'armed_vacation':_0x5c137d(0x1e0),'armed_custom_bypass':'yellow','arming':_0x5c137d(0x1e6),'pending':_0x5c137d(0x1e6),'triggered':'red'},'name_mapping':{'disarm_button':'Disarm','disarmed':_0x5c137d(0x24e),'disarming':'Disarming','armed_away':'Armed','armed_stay':_0x5c137d(0x24c),'armed_night':_0x5c137d(0x2a6),'armed_vacation':_0x5c137d(0x1b6),'armed_custom_bypass':_0x5c137d(0x26b),'arming':_0x5c137d(0x242),'pending':_0x5c137d(0x23f),'triggered':_0x5c137d(0x1e7)},'zones':[{'entity':_0x5c137d(0x31f),'name':_0x5c137d(0x225),'board_zone':0x1},{'entity':_0x5c137d(0x323),'name':_0x5c137d(0x1d1),'board_zone':0x2},{'entity':_0x5c137d(0x22e),'name':_0x5c137d(0x2c3),'board_zone':0x3},{'entity':_0x5c137d(0x290),'name':'Upstairs','board_zone':0x4},{'entity':'binary_sensor.alarm_zone_5','name':_0x5c137d(0x272),'board_zone':0x5},{'entity':_0x5c137d(0x217),'name':_0x5c137d(0x2f8),'board_zone':0x6},{'entity':'binary_sensor.alarm_zone_7','name':_0x5c137d(0x243),'board_zone':0x7},{'entity':_0x5c137d(0x20e),'name':'Panic','board_zone':0x8}],'keypad':{'hide_keypad_and_show_as_icon':![],'show_keypad_borders':!![],'keypad_width':0x64,'keypad_height':0x122,'keypad_border_color':null,'enable_3d_effects':!![],'effect_variant':_0x5c137d(0x1df),'action_button_1':_0x5c137d(0x316),'action_button_1_name':null,'action_button_2':_0x5c137d(0x260),'action_button_2_name':_0x5c137d(0x2f5),'action_button_3':![],'action_button_3_name':null,'action_button_4':![],'action_button_4_name':null,'action_button_5':![],'action_button_5_name':null},'zone_view':_0x5c137d(0x214),'view_open_only':{'zone_section_title':_0x5c137d(0x359),'hide_zone_section_icon':!![],'hide_zone_section_name':!![],'show_zone_numbers':!![],'show_zone_name':![],'color':_0x5c137d(0x34e)},'view_all_zones':{'zone_section_title':_0x5c137d(0x359),'hide_zone_section_icon':![],'hide_zone_section_name':![],'show_zone_numbers':!![],'show_zone_name':!![],'color_on':_0x5c137d(0x34e),'color_off':_0x5c137d(0x2ef),'text_color_on':'#ffffff','text_color_off':_0x5c137d(0x1c9),'show_on':_0x5c137d(0x1fc)},'history':{'hide_history':![],'history_section_title':_0x5c137d(0x33f),'hide_history_section_icon':![],'hide_history_section_name':![],'max_items':0x4,'list_height':_0x5c137d(0x1d3),'hours_to_show':0x6,'show_on':_0x5c137d(0x1fc)},'automations':{'hide_automations':![],'automation_section_title':_0x5c137d(0x2d5),'hide_automation_section_icon':!![],'hide_automation_section_name':!![],'hide_last_triggered':![],'automation_toggle_color':'green','automation_list':[_0x5c137d(0x33d)]},'grid_options':{'columns':0xc,'rows':_0x5c137d(0x25e)}};}static get['styles'](){return _0x470ab4`
        :host { display: block; }
        ha-card { padding: 16px; width: 100%; box-sizing: border-box; }
        .automation-item { display: flex; align-items: center; justify-content: space-between; padding: 4px 0; font-size: 0.9rem; border-bottom: 1px solid rgba(127, 127, 127, 0.15); }
        .automation-item:last-child { border-bottom: none; }
        .automation-main { display: flex; flex-direction: column; }
        .automation-meta { font-size: 0.75rem; opacity: 0.7; }
        .automation-name { font-weight: 500; }
        .automations-list { border-radius: 8px; background: var(--security-alarm-card-section-bg, var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))); padding: 8px 0; max-height: 280px; overflow-y: auto; scrollbar-width: none; }
        .automations-list::-webkit-scrollbar { width: 0; height: 0; }

        .body { display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box; }
        .body-automations-bottom { margin-top: 8px; }
        .body-history-bottom { margin-top: 8px; }
        .body-main { flex: 2; min-width: 0; display: flex; flex-direction: column; gap: 16px; }
        .body-side { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 10px; }
        .body-side-align-keypad { margin-top: 0; max-width: 300px; }
        .body-split { display: grid; grid-template-columns: minmax(220px, 2fr) minmax(200px, 1fr); align-items: start; gap: 16px; }
        .bottom-split { display: grid; grid-template-columns: minmax(220px, 2fr) minmax(200px, 1fr); gap: 16px; margin-top: 8px; align-items: start; }

        .chip { font-size: 0.8rem; padding: 0px 3px; border-radius: 999px; border: 1px solid var(--divider-color); cursor: pointer; min-width: 54px; text-align: center; transition: filter 0.15s ease, transform 0.05s ease; }
        .chip:active { transform: scale(0.97); filter: brightness(0.9); }
        .chip.off { background: var(--security-alarm-card-section-bg, var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))); }
        .chip.on { background: var(--primary-color); color: var(--text-primary-color, #fff); border-color: transparent; }
        .code-backspace-btn { border: none; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: var(--security-alarm-card-keypad-bg, var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))); cursor: pointer; transition: filter 0.15s ease, transform 0.05s ease; }
        .code-backspace-btn:disabled { opacity: 0.4; cursor: default; }
        .code-backspace-btn:not(:disabled):active { transform: scale(0.95); filter: brightness(0.9); }
        .code-display { font-family: monospace; font-size: 1.3rem; letter-spacing: 2px; min-width: 80px; text-align: center; }
        .code-row { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; min-height: var(--security-alarm-card-code-row-height, 56px); }
        .code-section { display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; padding-bottom: 10px; }

        .header { display: grid; grid-template-columns: auto 1fr auto; align-items: center; margin-bottom: 12px; column-gap: 4px; }
        .header-disarm-btn { padding: 6px 10px; border-radius: 999px; border: none; cursor: pointer; background: var(--primary-color); color: var(--text-primary-color, #fff); font-size: 0.85rem; display: inline-flex; align-items: center; justify-content: center; gap: 4px; transition: filter 0.15s ease, transform 0.05s ease, opacity 0.15s ease; white-space: nowrap; }
        .header-disarm-btn:disabled { opacity: 0.4; cursor: default; }
        .header-disarm-btn.inactive { opacity: 0.5; }
        .header-disarm-btn:not(:disabled):active { transform: scale(0.98); filter: brightness(0.9); }
        .header-disarm-cell { display: flex; justify-content: center; }
        .header-left { position: relative; display: flex; align-items: center; min-height: 40px; min-width: 0; }
        .header-leftonly { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); align-items: center; column-gap: 8px; margin-bottom: 12px; min-height: 40px; }
        .header-leftonly .header-disarm-cell { justify-self: center; position: static; transform: none; left: auto; width: auto; }
        .header-leftonly .header-status { justify-self: end; margin-right: 0; }
        .header-leftonly .title { justify-self: start; margin-left: 5px; }
        .header-right { display: flex; align-items: center; justify-content: flex-end; min-width: 0; }
        .header-status { justify-self: end; margin-right: 5px; }
        .header.header-split { grid-template-columns: minmax(220px, 2fr) minmax(200px, 1fr); column-gap: 16px; }
        .header.header-split .header-disarm-cell { position: absolute; left: 50%; transform: translateX(-50%); width: max-content; justify-content: center; }
        .header.header-split .header-right { justify-content: flex-start; }
        .header.header-split .header-status { margin-right: 0; }

        .history-item { display: flex; align-items: center; justify-content: space-between; padding: 4px 0; font-size: 0.9rem; border-bottom: 1px solid rgba(127, 127, 127, 0.15); }
        .history-item:last-child { border-bottom: none; }
        .history-list { border-radius: 8px; background: var(--security-alarm-card-section-bg, var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))); padding: 8px 0; max-height: 280px; overflow-y: auto; scrollbar-width: none; }
        .history-list::-webkit-scrollbar { width: 0; height: 0; }
        .history-main { display: flex; flex-direction: column; }
        .history-message { font-weight: 500; }
        .history-meta { font-size: 0.75rem; opacity: 0.7; }
        .history-wrapper-right { display: flex; flex-direction: column; }

        .keypad { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr); gap: 6px; width: 100%; }
        .keypad-button { border-radius: 8px; border: none; cursor: pointer; background: var(--security-alarm-card-keypad-bg, var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))); color: var(--security-alarm-card-keypad-color, var(--primary-text-color)); font-size: 1rem; transition: filter 0.15s ease, transform 0.05s ease; display: flex; align-items: center; justify-content: center; height: 100%; }
        .keypad-button:disabled { opacity: 0.4; cursor: default; }
        .keypad-button:not(:disabled):active { transform: scale(0.97); filter: brightness(0.9); }
        .keypad-button-3d { transform: translateY(0); background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.08), rgba(0, 0, 0, 0.08)); }
        .keypad-button-3d:not(:disabled):active { transform: translateY(2px); box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35); filter: brightness(0.95); }
        .keypad-button-3d-inset { box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.45); }
        .keypad-button-3d-inset:not(:disabled):active { transform: translateY(0); box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.6); filter: brightness(0.98); }
        .keypad-button-3d-soft { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35); border-radius: 10px; }
        .keypad-button-3d-strong { box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5); }
        .keypad-extra-row { display: grid; gap: 6px; width: 100%; }
        .keypad-fab { border: none; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: var(--security-alarm-card-keypad-bg, var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))); cursor: pointer; transition: filter 0.15s ease, transform 0.05s ease; }
        .keypad-fab:active { transform: scale(0.95); filter: brightness(0.9); }
        .keypad-fab-wrapper { display: flex; justify-content: center; margin-top: 8px; margin-bottom: 4px; }
        .keypad-wrapper { width: 100%; display: flex; flex-direction: column; gap: 6px; }

        .message { font-size: 0.8rem; color: var(--error-color); margin-top: 4px; }

        .section-header-automations { display: flex; align-items: center; justify-content: space-between; margin-top: 4px; margin-bottom: 4px; padding-top: 4px; }
        .section-header-history { display: flex; align-items: center; justify-content: space-between; margin-top: 4px; margin-bottom: 4px; padding-top: 4px; }
        .section-header-zones { display: flex; align-items: center; justify-content: space-between; margin-top: 4px; margin-bottom: 4px; padding-top: 4px; }
        .section-title-automations { font-size: 0.95rem; font-weight: 500; display: flex; align-items: center; gap: 4px; }
        .section-title-history { font-size: 0.95rem; font-weight: 500; display: flex; align-items: center; gap: 4px; }
        .section-title-zones { font-size: 0.95rem; font-weight: 500; display: flex; align-items: center; gap: 4px; }
        .small-text { font-size: 0.75rem; opacity: 0.7; }
        .state-label { font-size: 0.9rem; padding: 4px 10px; border-radius: 999px; background: var(--primary-background-color); color: var(--primary-text-color); text-transform: none; display: inline-block; }

        .title { display: flex; align-items: center; gap: 8px; font-size: 1.1rem; font-weight: 500; min-width: 0; margin-left: 5px; }
        .title span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .zone-item { display: flex; align-items: center; justify-content: space-between; padding: 4px 0; font-size: 0.9rem; border-bottom: 1px solid rgba(127, 127, 127, 0.15); }
        .zone-item:last-child { border-bottom: none; }
        .zone-main { display: flex; flex-direction: column; }
        .zone-meta { font-size: 0.75rem; opacity: 0.7; }
        .zone-name { font-weight: 500; }
        .zone-slot { border-radius: 6px; padding: 4px; text-align: center; font-size: 0.8rem; min-height: 36px; background: var(--security-alarm-card-section-bg, var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))); display: flex; flex-direction: column; justify-content: center; align-items: center; }
        .zone-slot-empty { background: transparent; }
        .zone-slot-name { font-size: 0.7rem; }
        .zone-slot-number { font-weight: 600; }
        .zone-slot-open { color: var(--text-primary-color, #fff); }
        .zone-slots { display: grid; gap: 4px; }
        .zone-state-badge { font-size: 0.8rem; padding: 2px 6px; border-radius: 999px; text-transform: uppercase; }
        .zones-list { border-radius: 8px; background: var(--security-alarm-card-section-bg, var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))); padding: 8px 0; max-height: 280px; overflow-y: auto; scrollbar-width: none; }
        .zones-list::-webkit-scrollbar { width: 0; height: 0; }
        .zones-list-fill { flex: 1 1 auto; min-height: 0; }
        .zones-wrapper-right { display: flex; flex-direction: column; }

        @media (max-width: 900px) {
          .body-split { grid-template-columns: 1fr; }
          .bottom-split { grid-template-columns: 1fr; }
          .header.header-split { grid-template-columns: 1fr; row-gap: 8px; }
          .header.header-split .header-disarm-cell { position: static; left: auto; transform: none; margin-left: auto; margin-right: auto; }
        }
      `;}[_0x3ca4b6(0x277)](_0x40f029){const _0x4cba6d=_0x3ca4b6;if(!_0x40f029||!_0x40f029[_0x4cba6d(0x30a)]){}const _0x524c3a=_0x8e952e(_0x40f029['colors']),_0x19f616=_0x8e952e(_0x40f029[_0x4cba6d(0x267)]),_0x26f152={'zone_section_title':_0x40f029[_0x4cba6d(0x2d7)]&&_0x40f029[_0x4cba6d(0x2d7)]['zone_section_title']?_0x40f029[_0x4cba6d(0x2d7)][_0x4cba6d(0x2ce)]:'Zones','hide_zone_section_icon':_0x40f029['view_open_only']&&typeof _0x40f029['view_open_only'][_0x4cba6d(0x26e)]==='boolean'?_0x40f029[_0x4cba6d(0x2d7)]['hide_zone_section_icon']:![],'hide_zone_section_name':_0x40f029[_0x4cba6d(0x2d7)]&&typeof _0x40f029[_0x4cba6d(0x2d7)][_0x4cba6d(0x328)]===_0x4cba6d(0x1ea)?_0x40f029[_0x4cba6d(0x2d7)][_0x4cba6d(0x328)]:![],'show_zone_numbers':_0x40f029[_0x4cba6d(0x2d7)]&&typeof _0x40f029['view_open_only'][_0x4cba6d(0x212)]==='boolean'?_0x40f029[_0x4cba6d(0x2d7)][_0x4cba6d(0x212)]:!![],'show_zone_name':_0x40f029[_0x4cba6d(0x2d7)]&&typeof _0x40f029[_0x4cba6d(0x2d7)]['show_zone_name']===_0x4cba6d(0x1ea)?_0x40f029[_0x4cba6d(0x2d7)]['show_zone_name']:!![],'color':_0x40f029[_0x4cba6d(0x2d7)]&&_0x40f029[_0x4cba6d(0x2d7)]['color']?_0x40f029[_0x4cba6d(0x2d7)][_0x4cba6d(0x201)]:null,'show_on':'bottom'},_0x48517e={'zone_section_title':_0x40f029[_0x4cba6d(0x2ec)]&&_0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x2ce)]?_0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x2ce)]:_0x40f029[_0x4cba6d(0x2d7)]&&_0x40f029['view_open_only'][_0x4cba6d(0x2ce)]||_0x4cba6d(0x359),'hide_zone_section_icon':_0x40f029['view_all_zones']&&typeof _0x40f029['view_all_zones']['hide_zone_section_icon']===_0x4cba6d(0x1ea)?_0x40f029['view_all_zones'][_0x4cba6d(0x26e)]:_0x40f029[_0x4cba6d(0x2d7)]&&typeof _0x40f029[_0x4cba6d(0x2d7)]['hide_zone_section_icon']===_0x4cba6d(0x1ea)?_0x40f029[_0x4cba6d(0x2d7)][_0x4cba6d(0x26e)]:![],'hide_zone_section_name':_0x40f029[_0x4cba6d(0x2ec)]&&typeof _0x40f029[_0x4cba6d(0x2ec)]['hide_zone_section_name']===_0x4cba6d(0x1ea)?_0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x328)]:_0x40f029[_0x4cba6d(0x2d7)]&&typeof _0x40f029[_0x4cba6d(0x2d7)]['hide_zone_section_name']==='boolean'?_0x40f029['view_open_only'][_0x4cba6d(0x328)]:![],'show_zone_numbers':_0x40f029['view_all_zones']&&typeof _0x40f029['view_all_zones'][_0x4cba6d(0x212)]===_0x4cba6d(0x1ea)?_0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x212)]:!![],'show_zone_name':_0x40f029[_0x4cba6d(0x2ec)]&&typeof _0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x24d)]==='boolean'?_0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x24d)]:!![],'color_on':_0x40f029[_0x4cba6d(0x2ec)]&&_0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x312)]?_0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x312)]:null,'color_off':_0x40f029[_0x4cba6d(0x2ec)]&&_0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x2ae)]?_0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x2ae)]:null,'text_color_on':_0x40f029[_0x4cba6d(0x2ec)]&&_0x40f029['view_all_zones'][_0x4cba6d(0x313)]?_0x40f029['view_all_zones'][_0x4cba6d(0x313)]:null,'text_color_off':_0x40f029['view_all_zones']&&_0x40f029['view_all_zones']['text_color_off']?_0x40f029[_0x4cba6d(0x2ec)]['text_color_off']:null,'show_on':_0x40f029[_0x4cba6d(0x2ec)]&&_0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x2b2)]?_0x40f029[_0x4cba6d(0x2ec)][_0x4cba6d(0x2b2)]:'bottom'},_0x70d35b={..._0x40f029[_0x4cba6d(0x2c5)]||{}};(_0x70d35b['action_button_2']===![]||_0x70d35b[_0x4cba6d(0x27e)]===_0x4cba6d(0x316))&&(_0x70d35b['action_button_2']='arm_away');const _0x280853=[],_0x418fe4=(_0x41a871,_0x3034d5,_0x10e023,_0x1b21dc)=>{const _0x5de870=_0x4cba6d,_0x5c53c8=_0x70d35b[_0x5de870(0x2a9)+_0x41a871],_0x598431=_0x70d35b[_0x5de870(0x2a9)+_0x41a871+_0x5de870(0x227)],_0x261905=_0x5c53c8===![]||_0x5c53c8==='false';if(_0x1b21dc){if(!_0x5c53c8||_0x261905)return;const _0x6ed5c1=_0x5c53c8,_0x2c9b3c=_0x598431||_0x10e023||_0x6ed5c1;_0x280853[_0x5de870(0x2e8)]({'index':_0x41a871,'mode':_0x6ed5c1,'label':_0x2c9b3c});}else{if(_0x261905)return;const _0x265aa7=_0x5c53c8?_0x5c53c8:_0x3034d5,_0x5648da=_0x598431||_0x10e023||_0x265aa7;_0x280853['push']({'index':_0x41a871,'mode':_0x265aa7,'label':_0x5648da});}};_0x418fe4(0x1,'arm_stay',_0x4cba6d(0x1d6),![]),_0x418fe4(0x2,null,null,!![]),_0x418fe4(0x3,null,null,!![]),_0x418fe4(0x4,null,null,!![]),_0x418fe4(0x5,null,null,!![]);const _0x3b2015={'hide_keypad_and_show_as_icon':_0x40f029[_0x4cba6d(0x2c5)]&&typeof _0x40f029[_0x4cba6d(0x2c5)][_0x4cba6d(0x2d6)]===_0x4cba6d(0x1ea)?_0x40f029[_0x4cba6d(0x2c5)][_0x4cba6d(0x2d6)]:![],'show_keypad_borders':_0x40f029[_0x4cba6d(0x2c5)]&&typeof _0x40f029[_0x4cba6d(0x2c5)][_0x4cba6d(0x31a)]===_0x4cba6d(0x1ea)?_0x40f029['keypad']['show_keypad_borders']:!![],'keypad_border_color':_0x40f029[_0x4cba6d(0x2c5)]&&_0x40f029[_0x4cba6d(0x2c5)][_0x4cba6d(0x32f)]?_0x40f029[_0x4cba6d(0x2c5)][_0x4cba6d(0x32f)]:null,'keypad_width':_0x40f029[_0x4cba6d(0x2c5)]&&_0x40f029[_0x4cba6d(0x2c5)][_0x4cba6d(0x2a4)]!=null?_0x40f029[_0x4cba6d(0x2c5)][_0x4cba6d(0x2a4)]:null,'keypad_height':_0x40f029[_0x4cba6d(0x2c5)]&&_0x40f029[_0x4cba6d(0x2c5)][_0x4cba6d(0x2fa)]!=null?_0x40f029[_0x4cba6d(0x2c5)]['keypad_height']:null,'enable_3d_effects':_0x40f029[_0x4cba6d(0x2c5)]&&typeof _0x40f029[_0x4cba6d(0x2c5)][_0x4cba6d(0x32c)]===_0x4cba6d(0x1ea)?_0x40f029[_0x4cba6d(0x2c5)]['enable_3d_effects']:![],'effect_variant':_0x40f029[_0x4cba6d(0x2c5)]&&_0x40f029[_0x4cba6d(0x2c5)][_0x4cba6d(0x299)]?_0x40f029[_0x4cba6d(0x2c5)][_0x4cba6d(0x299)]:_0x4cba6d(0x1df),'buttons':_0x280853},_0x2c184b={'hide_history':_0x40f029[_0x4cba6d(0x20a)]&&typeof _0x40f029[_0x4cba6d(0x20a)][_0x4cba6d(0x355)]===_0x4cba6d(0x1ea)?_0x40f029['history'][_0x4cba6d(0x355)]:![],'history_section_title':_0x40f029[_0x4cba6d(0x20a)]&&_0x40f029[_0x4cba6d(0x20a)][_0x4cba6d(0x1ff)]?_0x40f029[_0x4cba6d(0x20a)][_0x4cba6d(0x1ff)]:_0x4cba6d(0x33f),'hide_history_section_icon':_0x40f029[_0x4cba6d(0x20a)]&&typeof _0x40f029[_0x4cba6d(0x20a)][_0x4cba6d(0x202)]===_0x4cba6d(0x1ea)?_0x40f029[_0x4cba6d(0x20a)][_0x4cba6d(0x202)]:![],'hide_history_section_name':_0x40f029[_0x4cba6d(0x20a)]&&typeof _0x40f029['history'][_0x4cba6d(0x2a3)]===_0x4cba6d(0x1ea)?_0x40f029['history'][_0x4cba6d(0x2a3)]:![],'max_items':_0x40f029[_0x4cba6d(0x20a)]&&typeof _0x40f029['history']['max_items']===_0x4cba6d(0x1e8)?_0x40f029['history'][_0x4cba6d(0x22c)]:0x4,'hours_to_show':_0x40f029[_0x4cba6d(0x20a)]&&typeof _0x40f029['history'][_0x4cba6d(0x259)]===_0x4cba6d(0x1e8)?_0x40f029['history'][_0x4cba6d(0x259)]:0x6,'show_on':_0x40f029[_0x4cba6d(0x20a)]&&(_0x40f029['history'][_0x4cba6d(0x2b2)]===_0x4cba6d(0x1fc)||_0x40f029[_0x4cba6d(0x20a)][_0x4cba6d(0x2b2)]===_0x4cba6d(0x35a))?_0x40f029[_0x4cba6d(0x20a)]['show_on']:'bottom','list_height':_0x40f029[_0x4cba6d(0x20a)]&&(typeof _0x40f029[_0x4cba6d(0x20a)][_0x4cba6d(0x363)]==='number'||typeof _0x40f029[_0x4cba6d(0x20a)]['list_height']===_0x4cba6d(0x266))?_0x40f029[_0x4cba6d(0x20a)][_0x4cba6d(0x363)]:null},_0xeb4b3f={'hide_automations':_0x40f029['automations']&&typeof _0x40f029[_0x4cba6d(0x209)][_0x4cba6d(0x2dc)]==='boolean'?_0x40f029['automations'][_0x4cba6d(0x2dc)]:![],'automation_section_title':_0x40f029[_0x4cba6d(0x209)]&&_0x40f029[_0x4cba6d(0x209)][_0x4cba6d(0x350)]?_0x40f029[_0x4cba6d(0x209)][_0x4cba6d(0x350)]:_0x4cba6d(0x2d5),'hide_automation_section_icon':_0x40f029[_0x4cba6d(0x209)]&&typeof _0x40f029[_0x4cba6d(0x209)]['hide_automation_section_icon']==='boolean'?_0x40f029[_0x4cba6d(0x209)][_0x4cba6d(0x219)]:![],'hide_automation_section_name':_0x40f029['automations']&&typeof _0x40f029['automations'][_0x4cba6d(0x2d3)]===_0x4cba6d(0x1ea)?_0x40f029[_0x4cba6d(0x209)][_0x4cba6d(0x2d3)]:![],'hide_last_triggered':_0x40f029[_0x4cba6d(0x209)]&&typeof _0x40f029[_0x4cba6d(0x209)][_0x4cba6d(0x2ba)]==='boolean'?_0x40f029[_0x4cba6d(0x209)][_0x4cba6d(0x2ba)]:![],'show_on':_0x4cba6d(0x1fc),'automation_toggle_color':_0x40f029['automations']&&_0x40f029[_0x4cba6d(0x209)][_0x4cba6d(0x205)]?_0x40f029[_0x4cba6d(0x209)]['automation_toggle_color']:null,'automation_list':_0x40f029[_0x4cba6d(0x209)]&&Array[_0x4cba6d(0x1be)](_0x40f029[_0x4cba6d(0x209)]['automation_list'])?_0x40f029[_0x4cba6d(0x209)]['automation_list']:[]};this[_0x4cba6d(0x314)]={'entity':_0x40f029[_0x4cba6d(0x30a)],'title':_0x40f029[_0x4cba6d(0x1c6)]||null,'colors':_0x524c3a,'name_mapping':_0x19f616,'zones':_0x40f029['zones']||[],'zone_view':_0x40f029[_0x4cba6d(0x1b7)]||_0x40f029[_0x4cba6d(0x2e5)]||_0x40f029[_0x4cba6d(0x25c)]||_0x4cba6d(0x214),'view_open_only':_0x26f152,'view_all_zones':_0x48517e,'keypad':_0x3b2015,'history':_0x2c184b,'automations':_0xeb4b3f,'grid_options':_0x40f029['grid_options']||undefined};}['getCardSize'](){return 0x5;}[_0x3ca4b6(0x22b)](){const _0x27182d=_0x3ca4b6;this[_0x27182d(0x23b)]();}[_0x3ca4b6(0x257)](){const _0x1ed664=_0x3ca4b6;this[_0x1ed664(0x203)]();}[_0x3ca4b6(0x303)](){const _0x22855c=_0x3ca4b6;super[_0x22855c(0x303)]();this['_layoutRAF']&&(cancelAnimationFrame(this[_0x22855c(0x297)]),this[_0x22855c(0x297)]=null);if(this[_0x22855c(0x2ea)]){try{this[_0x22855c(0x2ea)][_0x22855c(0x29a)]();}catch(_0x318a50){}this[_0x22855c(0x2ea)]=null;}this['_layoutObserved']=![];}[_0x3ca4b6(0x23b)](){const _0x5c5237=_0x3ca4b6;if(this[_0x5c5237(0x2ea)])return;this[_0x5c5237(0x2ea)]=new ResizeObserver(()=>this['_scheduleRecalc']()),this[_0x5c5237(0x203)]();}[_0x3ca4b6(0x203)](){const _0xf30691=_0x3ca4b6;if(this[_0xf30691(0x297)])return;this['_layoutRAF']=requestAnimationFrame(()=>{this['_layoutRAF']=null,this['_recalcSideMaxHeight']();});}['_recalcSideMaxHeight'](){const _0x475376=_0x3ca4b6,_0x5206b1=this[_0x475376(0x1c1)]||this['shadowRoot'];if(!_0x5206b1)return;const _0x55c553=_0x5206b1['querySelector']('.body-main'),_0x22f281=_0x5206b1[_0x475376(0x31c)](_0x475376(0x27b));if(!_0x55c553||!_0x22f281)return;if(this[_0x475376(0x2ea)]&&!this[_0x475376(0x1d2)]){this['_layoutObserved']=!![];try{this[_0x475376(0x2ea)][_0x475376(0x2bc)](_0x55c553),this[_0x475376(0x2ea)][_0x475376(0x2bc)](_0x22f281);}catch(_0x358341){}}const _0x25048d=Math[_0x475376(0x2bb)](_0x55c553[_0x475376(0x274)]()[_0x475376(0x2e2)]);if(!_0x25048d||isNaN(_0x25048d))return;(this[_0x475376(0x1f9)]==null||Math[_0x475376(0x324)](this[_0x475376(0x1f9)]-_0x25048d)>=0x2)&&(this[_0x475376(0x1f9)]=_0x25048d,this[_0x475376(0x2d1)]());}set['hass'](_0x389fb2){const _0x10da5d=_0x3ca4b6;this[_0x10da5d(0x21c)]=_0x389fb2;const _0x5bfa3e=this['_getStateObjFrom'](_0x389fb2);this[_0x10da5d(0x2a5)](_0x5bfa3e),this[_0x10da5d(0x345)](),this[_0x10da5d(0x264)](),this[_0x10da5d(0x2d1)]();}get[_0x3ca4b6(0x21a)](){const _0x1e11d2=_0x3ca4b6;return this[_0x1e11d2(0x21c)];}['_getStateObj'](){const _0x41de72=_0x3ca4b6;return this[_0x41de72(0x2fe)](this[_0x41de72(0x21c)]);}['_getStateObjFrom'](_0x5b9795){const _0x3a2d26=_0x3ca4b6;if(!_0x5b9795||!this['_config']||!this['_config'][_0x3a2d26(0x30a)])return null;return _0x5b9795[_0x3a2d26(0x27a)][this['_config'][_0x3a2d26(0x30a)]]||null;}[_0x3ca4b6(0x303)](){const _0x54bee7=_0x3ca4b6;super[_0x54bee7(0x303)]&&super[_0x54bee7(0x303)](),this[_0x54bee7(0x271)]&&(clearInterval(this[_0x54bee7(0x271)]),this['_countdownTimer']=null),this[_0x54bee7(0x248)]&&(this['_unsubStateChanged'](),this[_0x54bee7(0x248)]=null);}['_handleCountdown'](_0x3e1980){const _0xdf4c3b=_0x3ca4b6;if(!_0x3e1980){this[_0xdf4c3b(0x271)]&&(clearInterval(this['_countdownTimer']),this[_0xdf4c3b(0x271)]=null);this['_countdownValue']=null,this[_0xdf4c3b(0x21f)]=null,this[_0xdf4c3b(0x2f1)]=null;return;}const _0x2efe78=_0x3e1980[_0xdf4c3b(0x361)],_0x6698f=_0x3e1980[_0xdf4c3b(0x1e3)]&&typeof _0x3e1980[_0xdf4c3b(0x1e3)]['delay']==='number'?_0x3e1980[_0xdf4c3b(0x1e3)][_0xdf4c3b(0x2eb)]:null,_0x4d8d73=[_0xdf4c3b(0x30d),_0xdf4c3b(0x30e)];_0x4d8d73['includes'](_0x2efe78)&&_0x6698f&&_0x6698f>0x0?(this['_lastAlarmState']!==_0x2efe78||this[_0xdf4c3b(0x2f1)]!==_0x6698f)&&(this[_0xdf4c3b(0x271)]&&(clearInterval(this[_0xdf4c3b(0x271)]),this['_countdownTimer']=null),this[_0xdf4c3b(0x356)]=_0x6698f,this[_0xdf4c3b(0x271)]=setInterval(()=>{const _0x192089=_0xdf4c3b;if(this['_countdownValue']==null)return;this[_0x192089(0x356)]>0x0?(this['_countdownValue']=this['_countdownValue']-0x1,this[_0x192089(0x2d1)]()):(clearInterval(this[_0x192089(0x271)]),this[_0x192089(0x271)]=null);},0x3e8)):(this[_0xdf4c3b(0x271)]&&(clearInterval(this[_0xdf4c3b(0x271)]),this[_0xdf4c3b(0x271)]=null),this['_countdownValue']=null),this[_0xdf4c3b(0x21f)]=_0x2efe78,this[_0xdf4c3b(0x2f1)]=_0x6698f;}[_0x3ca4b6(0x281)](_0x13bbde){const _0x9b33b3=_0x3ca4b6;if(!_0x13bbde||!this[_0x9b33b3(0x21c)])return _0x13bbde?_0x13bbde[_0x9b33b3(0x361)]:'';const _0x1ed190=_0x13bbde[_0x9b33b3(0x361)],_0x3a2f0e='state.alarm_control_panel.'+_0x1ed190,_0x368c7b=this[_0x9b33b3(0x21c)]['localize']&&this[_0x9b33b3(0x21c)]['localize'](_0x3a2f0e)?this[_0x9b33b3(0x21c)]['localize'](_0x3a2f0e):null;return _0x368c7b||_0x1ed190;}[_0x3ca4b6(0x1cd)](_0x3a60f2){const _0x423715=_0x3ca4b6;if(!_0x3a60f2)return'';const _0x231d81=this['_config'][_0x423715(0x267)]||{},_0x53ac04=_0x3a60f2[_0x423715(0x361)];let _0x3926a2=_0x53ac04;if(_0x53ac04==='armed_home')_0x3926a2=_0x423715(0x20b);if(_0x231d81[_0x3926a2])return _0x231d81[_0x3926a2];const _0x35213d={'disarmed':_0x423715(0x24e),'armed_away':_0x423715(0x1ca),'armed_stay':_0x423715(0x21b),'armed_home':'Armed\x20Home','armed_night':_0x423715(0x233),'armed_vacation':_0x423715(0x23d),'armed_custom_bypass':'Armed\x20Bypass','arming':'Arming','disarming':_0x423715(0x2cb),'pending':_0x423715(0x1c4),'triggered':_0x423715(0x34c)};if(_0x35213d[_0x53ac04])return _0x35213d[_0x53ac04];const _0xacb28d=this['_localizeStateRaw'](_0x3a60f2);return _0xacb28d;}[_0x3ca4b6(0x296)](_0x12df11){const _0x13e4cb=_0x3ca4b6,_0x56e05b=this[_0x13e4cb(0x314)]['colors']||{};if(!_0x12df11)return null;const _0xdd74a5=_0x12df11[_0x13e4cb(0x361)];if(_0xdd74a5===_0x13e4cb(0x348)&&_0x56e05b['armed_away'])return _0x56e05b[_0x13e4cb(0x348)];if(_0xdd74a5===_0x13e4cb(0x25a)&&_0x56e05b['armed_stay'])return _0x56e05b['armed_stay'];if(_0xdd74a5===_0x13e4cb(0x30d)&&_0x56e05b['arming'])return _0x56e05b[_0x13e4cb(0x30d)];if(_0xdd74a5===_0x13e4cb(0x30e)&&_0x56e05b[_0x13e4cb(0x30e)])return _0x56e05b[_0x13e4cb(0x30e)];if(_0xdd74a5==='triggered'&&_0x56e05b[_0x13e4cb(0x2b6)])return _0x56e05b[_0x13e4cb(0x2b6)];if(_0xdd74a5===_0x13e4cb(0x34a)&&_0x56e05b[_0x13e4cb(0x34a)])return _0x56e05b[_0x13e4cb(0x34a)];return null;}[_0x3ca4b6(0x2b0)](_0x3dbc40){const _0x5b530a=_0x3ca4b6,_0x5ae79b=this['_config'][_0x5b530a(0x1cc)]||{};if(_0x3dbc40&&_0x5ae79b[_0x5b530a(0x2ab)])return _0x5ae79b[_0x5b530a(0x2ab)];if(!_0x3dbc40&&_0x5ae79b[_0x5b530a(0x1da)])return _0x5ae79b[_0x5b530a(0x1da)];return null;}[_0x3ca4b6(0x250)](){const _0xeff092=_0x3ca4b6,_0x57f03c=this[_0xeff092(0x314)][_0xeff092(0x267)]||{};return _0x57f03c[_0xeff092(0x230)]||_0xeff092(0x352);}[_0x3ca4b6(0x30c)](_0x355b08){const _0x23b274=_0x3ca4b6;return[_0x23b274(0x348),_0x23b274(0x25a),'armed_night','armed_vacation',_0x23b274(0x35e),_0x23b274(0x30e),_0x23b274(0x2b6),_0x23b274(0x30d),_0x23b274(0x34a)]['includes'](_0x355b08);}['_formatTime'](_0x3bbfd6){const _0x5075ab=_0x3ca4b6;if(!this[_0x5075ab(0x21c)]||!_0x3bbfd6)return'';try{const _0x4a0cdc=new Date(_0x3bbfd6);return _0x4a0cdc['toLocaleString'](this[_0x5075ab(0x21c)][_0x5075ab(0x1bb)][_0x5075ab(0x278)]||undefined,{'hour':_0x5075ab(0x283),'minute':'2-digit','day':_0x5075ab(0x283),'month':_0x5075ab(0x283)});}catch(_0x1ed5ac){return _0x3bbfd6;}}['_formatHistoryState'](_0x39009c,_0x42023d){const _0x4ccf2b=_0x3ca4b6;if(!_0x39009c||!this['_hass'])return _0x42023d||'';const _0x2b21d7=this[_0x4ccf2b(0x21c)][_0x4ccf2b(0x27a)][_0x39009c];if(!_0x2b21d7)return _0x42023d||'';const _0x5127bd={..._0x2b21d7,'state':_0x42023d};if(_0x39009c[_0x4ccf2b(0x22a)](_0x4ccf2b(0x1ef)))return this[_0x4ccf2b(0x1cd)](_0x5127bd);if(_0x39009c[_0x4ccf2b(0x22a)](_0x4ccf2b(0x26c))){const _0x16e201={'stateObj':_0x5127bd,'state':_0x42023d,'isOpen':_0x42023d==='on'||_0x42023d==='open'||_0x42023d===_0x4ccf2b(0x27f),'isClosed':_0x42023d==='off'||_0x42023d===_0x4ccf2b(0x331)||_0x42023d===_0x4ccf2b(0x347)};return this[_0x4ccf2b(0x232)](_0x16e201);}if(this[_0x4ccf2b(0x21c)]&&typeof this['_hass']['formatEntityState']===_0x4ccf2b(0x2e9))try{const _0x162e74=this[_0x4ccf2b(0x21c)][_0x4ccf2b(0x1f8)](_0x5127bd);if(_0x162e74)return _0x162e74;}catch(_0x2031af){}return _0x42023d||'';}[_0x3ca4b6(0x287)](_0x2e86dc){const _0x553c9a=_0x3ca4b6,_0x329dcd={'arm_stay':_0x553c9a(0x1f1),'arm_away':_0x553c9a(0x260),'arm_night':_0x553c9a(0x1cb),'arm_vacation':_0x553c9a(0x305),'arm_custom_bypass':'arm_custom_bypass'};if(!_0x2e86dc)return _0x2e86dc;return _0x329dcd[_0x2e86dc]||_0x2e86dc;}[_0x3ca4b6(0x2fc)](_0x13c411,_0xeffca6){const _0x26a5b8=_0x3ca4b6,_0x3a0096=_0x13c411&&_0x13c411[_0x26a5b8(0x1e3)]||{},_0x58618c=!!_0x3a0096[_0x26a5b8(0x33a)]||typeof _0x3a0096[_0x26a5b8(0x258)]===_0x26a5b8(0x1ea)||typeof _0x3a0096[_0x26a5b8(0x1f3)]===_0x26a5b8(0x1ea);if(!_0x58618c)return![];const _0x572113=_0xeffca6===_0x26a5b8(0x2b8),_0x201b94=typeof _0xeffca6===_0x26a5b8(0x266)&&_0xeffca6['startsWith'](_0x26a5b8(0x215)),_0x57d065=typeof _0x3a0096['code_disarm_required']===_0x26a5b8(0x1ea)?_0x3a0096[_0x26a5b8(0x1f3)]:!![],_0x2a099b=typeof _0x3a0096[_0x26a5b8(0x258)]===_0x26a5b8(0x1ea)?_0x3a0096[_0x26a5b8(0x258)]:![];return _0x572113&&_0x57d065||_0x201b94&&_0x2a099b;}['_handleAction'](_0x361bac){const _0x1640fe=_0x3ca4b6,_0x30cc41=this[_0x1640fe(0x310)]();if(!this[_0x1640fe(0x21c)]||!_0x30cc41)return;const _0x21679b=this['_normalizeMode'](_0x361bac),_0x2f695b=this['_needsCodeForAction'](_0x30cc41,_0x21679b),_0x1e392f=!!(this[_0x1640fe(0x314)]&&this[_0x1640fe(0x314)][_0x1640fe(0x2c5)]&&this[_0x1640fe(0x314)]['keypad'][_0x1640fe(0x2d6)]);if(_0x2f695b&&(!this[_0x1640fe(0x2ac)]||!this[_0x1640fe(0x2ac)][_0x1640fe(0x286)])){this[_0x1640fe(0x320)]=_0x1e392f?'':_0x21679b===_0x1640fe(0x2b8)?'Enter\x20code\x20to\x20disarm.':_0x1640fe(0x32b),this[_0x1640fe(0x263)]=![],this[_0x1640fe(0x2d1)]();if(_0x1e392f)this[_0x1640fe(0x311)]();else try{const _0x4477d6=this['renderRoot']||this[_0x1640fe(0x25d)],_0x3b5676=_0x4477d6&&_0x4477d6[_0x1640fe(0x31c)]&&_0x4477d6[_0x1640fe(0x31c)](_0x1640fe(0x293));_0x3b5676&&typeof _0x3b5676['scrollIntoView']===_0x1640fe(0x2e9)&&_0x3b5676['scrollIntoView']({'behavior':'smooth','block':_0x1640fe(0x29e)});}catch(_0x4b5d9){}return;}const _0x1d8885=this[_0x1640fe(0x21c)][_0x1640fe(0x25f)]&&this[_0x1640fe(0x21c)]['services'][_0x1640fe(0x2d8)]&&(this[_0x1640fe(0x21c)]['services'][_0x1640fe(0x2d8)][_0x1640fe(0x200)]||this['_hass']['services'][_0x1640fe(0x2d8)][_0x1640fe(0x2b8)]);let _0x4c6396,_0x50f7c8;const _0x6b4bdd={'entity_id':this['_config'][_0x1640fe(0x30a)]};if(_0x1d8885){if(_0x21679b==='disarm')_0x4c6396='alarmo',_0x50f7c8='disarm';else{_0x4c6396=_0x1640fe(0x2d8),_0x50f7c8=_0x1640fe(0x200);const _0x3d1ab5={'arm_home':_0x1640fe(0x333),'arm_away':_0x1640fe(0x354),'arm_night':_0x1640fe(0x1d0),'arm_vacation':'vacation','arm_custom_bypass':_0x1640fe(0x20f)},_0x366e1d=_0x3d1ab5[_0x21679b];if(!_0x366e1d){console['warn'](_0x1640fe(0x2f6),_0x361bac);return;}_0x6b4bdd[_0x1640fe(0x1c3)]=_0x366e1d;}}else{const _0x3e3fc1={'disarm':_0x1640fe(0x321),'arm_home':'alarm_arm_home','arm_away':_0x1640fe(0x1e5),'arm_night':'alarm_arm_night','arm_vacation':_0x1640fe(0x269),'arm_custom_bypass':_0x1640fe(0x244)},_0x329591=_0x3e3fc1[_0x21679b];if(!_0x329591){console[_0x1640fe(0x23c)]('alarm-and-security-card:\x20Unsupported\x20mode',_0x361bac);return;}_0x4c6396=_0x1640fe(0x30b),_0x50f7c8=_0x329591;}this[_0x1640fe(0x2ac)]&&this[_0x1640fe(0x2ac)][_0x1640fe(0x286)]>0x0&&(_0x6b4bdd[_0x1640fe(0x2f2)]=this['_code']),this[_0x1640fe(0x263)]=!![],this['_message']='',this[_0x1640fe(0x2d1)](),this['_hass'][_0x1640fe(0x1f4)](_0x4c6396,_0x50f7c8,_0x6b4bdd)[_0x1640fe(0x2aa)](()=>{const _0x15abda=_0x1640fe;this[_0x15abda(0x2ac)]='';})[_0x1640fe(0x1e9)](_0x337f4b=>{const _0x5d1166=_0x1640fe;console[_0x5d1166(0x213)]('alarm-and-security-card:\x20service\x20error',_0x337f4b),this[_0x5d1166(0x320)]=_0x337f4b&&(_0x337f4b[_0x5d1166(0x322)]||_0x337f4b[_0x5d1166(0x1d5)]())||_0x5d1166(0x2b9);})[_0x1640fe(0x32d)](()=>{const _0xa5ce94=_0x1640fe;this['_busy']=![],this[_0xa5ce94(0x2d1)]();});}[_0x3ca4b6(0x302)](_0x487765){const _0x2f24a1=_0x3ca4b6;typeof _0x487765===_0x2f24a1(0x266)&&_0x487765['length']===0x1&&(this[_0x2f24a1(0x2ac)][_0x2f24a1(0x286)]<0xc&&(this[_0x2f24a1(0x2ac)]=this['_code']+_0x487765)),this['requestUpdate']();}['_handleBackspace'](){const _0x23da4f=_0x3ca4b6;if(!this['_code'])return;this['_code']=this[_0x23da4f(0x2ac)]['slice'](0x0,-0x1),this[_0x23da4f(0x2d1)]();}[_0x3ca4b6(0x29c)](_0x4d56fa){const _0x5a677b=_0x3ca4b6;if(!this['_hass']||!_0x4d56fa)return;const _0x5b67fe=this[_0x5a677b(0x21c)][_0x5a677b(0x27a)][_0x4d56fa],_0x278cc0=_0x5b67fe&&_0x5b67fe['state']==='on',_0x5cf818=String(_0x4d56fa)[_0x5a677b(0x1d4)]('.')[0x0];if(!_0x5cf818)return;this[_0x5a677b(0x263)]=!![],this[_0x5a677b(0x2d1)](),this[_0x5a677b(0x21c)][_0x5a677b(0x1f4)](_0x5cf818,_0x278cc0?_0x5a677b(0x28f):_0x5a677b(0x2a8),{'entity_id':_0x4d56fa})['catch'](_0x257e6d=>{const _0x36075e=_0x5a677b;console['error'](_0x36075e(0x2c6),_0x257e6d),this[_0x36075e(0x320)]=_0x257e6d&&(_0x257e6d[_0x36075e(0x322)]||_0x257e6d[_0x36075e(0x1d5)]())||_0x36075e(0x210);})[_0x5a677b(0x32d)](()=>{const _0x49d2ed=_0x5a677b;this[_0x49d2ed(0x263)]=![],this[_0x49d2ed(0x2d1)]();});}['_toggleAutomation'](_0x5c5e09){const _0x360a3b=_0x3ca4b6;return this[_0x360a3b(0x29c)](_0x5c5e09);}[_0x3ca4b6(0x311)](){const _0x4ee5af=_0x3ca4b6;if(!this['_config']||!this[_0x4ee5af(0x314)]['entity'])return;const _0x404ece=new Event(_0x4ee5af(0x216),{'bubbles':!![],'composed':!![]});_0x404ece[_0x4ee5af(0x268)]={'entityId':this[_0x4ee5af(0x314)]['entity']},this[_0x4ee5af(0x2db)](_0x404ece);}[_0x3ca4b6(0x23e)](){const _0x550b1c=_0x3ca4b6;if(!this[_0x550b1c(0x314)][_0x550b1c(0x208)]||!this[_0x550b1c(0x21c)])return[];return this[_0x550b1c(0x314)][_0x550b1c(0x208)][_0x550b1c(0x341)](_0x3125ca=>{const _0x3d3525=_0x550b1c,_0x1c1c63=this[_0x3d3525(0x21c)][_0x3d3525(0x27a)][_0x3125ca[_0x3d3525(0x30a)]],_0xc468a7=_0x1c1c63?_0x1c1c63[_0x3d3525(0x361)]:_0x3d3525(0x2c9),_0x3ebdf2=_0xc468a7==='on'||_0xc468a7===_0x3d3525(0x336)||_0xc468a7===_0x3d3525(0x27f),_0x2755a1=_0xc468a7===_0x3d3525(0x358)||_0xc468a7===_0x3d3525(0x331)||_0xc468a7===_0x3d3525(0x347),_0x3f9531=_0x3125ca[_0x3d3525(0x1ec)]||_0x1c1c63&&_0x1c1c63['attributes']&&_0x1c1c63[_0x3d3525(0x1e3)]['friendly_name']||_0x3125ca[_0x3d3525(0x30a)],_0x401422=_0x3125ca['board_zone']!=null?Number(_0x3125ca[_0x3d3525(0x2a7)]):undefined,_0x4feab9=_0x1c1c63&&_0x1c1c63[_0x3d3525(0x1e3)]&&_0x1c1c63['attributes'][_0x3d3525(0x334)];return{'entity':_0x3125ca[_0x3d3525(0x30a)],'name':_0x3f9531,'board_zone':_0x401422,'state':_0xc468a7,'isOpen':_0x3ebdf2,'isClosed':_0x2755a1,'device_class':_0x4feab9,'stateObj':_0x1c1c63};});}['_getZoneDisplayLabel'](_0x1b1d44){const _0x34f61a=_0x3ca4b6;if(!_0x1b1d44)return'';const _0x586c58=_0x1b1d44['stateObj'];if(!_0x586c58){if(_0x1b1d44[_0x34f61a(0x30f)])return _0x34f61a(0x253);if(_0x1b1d44[_0x34f61a(0x1bf)])return _0x34f61a(0x284);return _0x1b1d44['state']||'';}const _0x2e6bc3=_0x586c58[_0x34f61a(0x361)],_0xb5e85e=_0x586c58[_0x34f61a(0x1e3)]||{},_0x139405=_0xb5e85e[_0x34f61a(0x334)];if(_0x139405){const _0x371519=['door',_0x34f61a(0x21d),'window',_0x34f61a(0x1c0),_0x34f61a(0x1dd)];if(_0x371519[_0x34f61a(0x1e1)](_0x139405)){if(_0x2e6bc3==='on'||_0x2e6bc3===_0x34f61a(0x336)||_0x2e6bc3===_0x34f61a(0x27f))return _0x34f61a(0x253);if(_0x2e6bc3==='off'||_0x2e6bc3===_0x34f61a(0x331)||_0x2e6bc3===_0x34f61a(0x347))return _0x34f61a(0x284);}const _0x5a8d6a=['motion',_0x34f61a(0x249),_0x34f61a(0x34d),'presence',_0x34f61a(0x27d),_0x34f61a(0x1e4),'gas',_0x34f61a(0x360),'safety',_0x34f61a(0x220),'tamper','sound',_0x34f61a(0x289),_0x34f61a(0x2bd),_0x34f61a(0x317)];if(_0x5a8d6a['includes'](_0x139405)){if(_0x2e6bc3==='on'||_0x2e6bc3==='unsafe'||_0x2e6bc3===_0x34f61a(0x220)||_0x2e6bc3===_0x34f61a(0x298))return'Detected';if(_0x2e6bc3===_0x34f61a(0x358)||_0x2e6bc3===_0x34f61a(0x20c)||_0x2e6bc3==='ok'||_0x2e6bc3==='clear')return _0x34f61a(0x27c);}}if(this[_0x34f61a(0x21c)]&&typeof this[_0x34f61a(0x21c)][_0x34f61a(0x1f8)]===_0x34f61a(0x2e9))try{const _0xfbdfbd=this['_hass']['formatEntityState'](_0x586c58);if(_0xfbdfbd)return _0xfbdfbd;}catch(_0x58fcd7){}if(_0x586c58[_0x34f61a(0x2d9)]&&_0x586c58[_0x34f61a(0x2d9)][_0x34f61a(0x22a)](_0x34f61a(0x26c))){const _0x791cfd=_0x2ac970=>{const _0x2fa02f=_0x34f61a;return this[_0x2fa02f(0x21c)]&&this[_0x2fa02f(0x21c)][_0x2fa02f(0x2f7)]?this[_0x2fa02f(0x21c)][_0x2fa02f(0x2f7)](_0x2ac970):null;};if(_0x139405){const _0x424b5f=_0x34f61a(0x318)+_0x139405+'.'+_0x2e6bc3,_0x1d9996=_0x791cfd(_0x424b5f);if(_0x1d9996)return _0x1d9996;const _0x21f4f7='state.binary_sensor.'+_0x139405+'.'+_0x2e6bc3,_0x2d3a43=_0x791cfd(_0x21f4f7);if(_0x2d3a43)return _0x2d3a43;}const _0x453272='state.binary_sensor.'+_0x2e6bc3,_0x30f45b=_0x791cfd(_0x453272);if(_0x30f45b)return _0x30f45b;const _0x1c1000=_0x34f61a(0x2a0)+_0x2e6bc3,_0x681f2=_0x791cfd(_0x1c1000);if(_0x681f2)return _0x681f2;}if(_0x2e6bc3==='on')return _0x34f61a(0x1f2);if(_0x2e6bc3===_0x34f61a(0x358))return _0x34f61a(0x27c);if(_0x1b1d44[_0x34f61a(0x30f)])return'Opened';if(_0x1b1d44['isClosed'])return _0x34f61a(0x284);return _0x2e6bc3;}async[_0x3ca4b6(0x264)](){const _0x23fdd5=_0x3ca4b6;if(!this[_0x23fdd5(0x21c)]||!this[_0x23fdd5(0x314)]||this['_initialHistoryLoaded'])return;const _0x3bc308=this[_0x23fdd5(0x314)][_0x23fdd5(0x20a)]||{},_0x5aedf2=_0x3bc308[_0x23fdd5(0x259)]||0x6,_0x27f20a=_0x3bc308['max_items']||0x4,_0x29ba87=new Date(),_0x44c121=new Date(_0x29ba87[_0x23fdd5(0x2e0)]()-_0x5aedf2*0x3c*0x3c*0x3e8),_0x2df3a0=_0x44c121[_0x23fdd5(0x235)](),_0x34e315=_0x29ba87[_0x23fdd5(0x235)](),_0x45fcf9=this[_0x23fdd5(0x314)][_0x23fdd5(0x30a)],_0x106ad3=(this[_0x23fdd5(0x314)]['zones']||[])[_0x23fdd5(0x341)](_0x3d2fb6=>_0x3d2fb6['entity'])[_0x23fdd5(0x1bd)](Boolean),_0x19bf61=[_0x45fcf9,..._0x106ad3];if(!_0x19bf61[_0x23fdd5(0x286)]){this['_initialHistoryLoaded']=!![];return;}const _0x1800e3=encodeURIComponent(_0x19bf61[_0x23fdd5(0x226)](','));try{const _0x586c90=await this[_0x23fdd5(0x21c)][_0x23fdd5(0x224)](_0x23fdd5(0x34b),_0x23fdd5(0x2d4)+_0x2df3a0+_0x23fdd5(0x21e)+_0x1800e3+'&end_time='+_0x34e315+_0x23fdd5(0x2bf)),_0x54c8f9=[],_0x5dfd6f=Date[_0x23fdd5(0x234)](),_0x1b763c=_0x5aedf2*0x3c*0x3c*0x3e8;(_0x586c90||[])[_0x23fdd5(0x2c8)](_0x11f026=>{const _0xc649eb=_0x23fdd5;if(!Array['isArray'](_0x11f026)||!_0x11f026[_0xc649eb(0x286)])return;const _0x408817=_0x11f026[0x0]['entity_id'];if(!_0x408817)return;const _0x283f54=this[_0xc649eb(0x21c)][_0xc649eb(0x27a)][_0x408817],_0x5025f0=_0x283f54&&_0x283f54[_0xc649eb(0x1e3)]&&_0x283f54['attributes'][_0xc649eb(0x2ed)]||_0x408817||_0xc649eb(0x2cf);_0x11f026[_0xc649eb(0x2c8)](_0x16a703=>{const _0x221ddd=_0xc649eb,_0x581b99=_0x16a703[_0x221ddd(0x361)],_0x350e7b=_0x16a703[_0x221ddd(0x239)]||_0x16a703[_0x221ddd(0x204)];if(!_0x350e7b)return;const _0x256e83=new Date(_0x350e7b)[_0x221ddd(0x2e0)]();if(isNaN(_0x256e83)||_0x5dfd6f-_0x256e83>_0x1b763c)return;const _0x54151f=this[_0x221ddd(0x2e1)](_0x408817,_0x581b99);_0x54c8f9[_0x221ddd(0x2e8)]({'entity_id':_0x408817,'raw_state':_0x581b99,'state':_0x54151f,'label':_0x5025f0+':\x20'+_0x54151f,'time':_0x350e7b});});}),_0x54c8f9[_0x23fdd5(0x26d)]((_0x5d4810,_0xeb91c8)=>new Date(_0xeb91c8[_0x23fdd5(0x236)])-new Date(_0x5d4810[_0x23fdd5(0x236)])),this[_0x23fdd5(0x223)]=_0x54c8f9[_0x23fdd5(0x2f4)](0x0,_0x27f20a),this[_0x23fdd5(0x218)]=null,this['_initialHistoryLoaded']=!![],this['requestUpdate']();}catch(_0x4d5f65){console[_0x23fdd5(0x213)](_0x23fdd5(0x1bc),_0x4d5f65),this[_0x23fdd5(0x218)]=_0x4d5f65&&(_0x4d5f65[_0x23fdd5(0x322)]||_0x4d5f65[_0x23fdd5(0x1d5)]())||'History\x20could\x20not\x20be\x20loaded.\x20See\x20console\x20for\x20details.',this[_0x23fdd5(0x2c4)]=!![],this['requestUpdate']();}}[_0x3ca4b6(0x345)](){const _0x3b33e9=_0x3ca4b6;if(!this[_0x3b33e9(0x21c)]||!this[_0x3b33e9(0x21c)][_0x3b33e9(0x362)]||!this['_config'])return;if(this[_0x3b33e9(0x248)])return;const _0x32adc1=this[_0x3b33e9(0x314)]['entity'],_0x214911=(this['_config'][_0x3b33e9(0x208)]||[])[_0x3b33e9(0x341)](_0x41d0ff=>_0x41d0ff[_0x3b33e9(0x30a)])[_0x3b33e9(0x1bd)](Boolean),_0x43e6c2=new Set([_0x32adc1,..._0x214911]);this[_0x3b33e9(0x248)]=this[_0x3b33e9(0x21c)]['connection']['subscribeEvents'](_0x4c6043=>{const _0x5c42f7=_0x3b33e9,_0x357c67=_0x4c6043[_0x5c42f7(0x325)]||{},_0x22fb0c=_0x357c67['entity_id'],_0x330966=_0x357c67['new_state'];if(!_0x22fb0c||!_0x330966)return;if(!_0x43e6c2['has'](_0x22fb0c))return;const _0x3ef37b=_0x357c67[_0x5c42f7(0x1ee)];if(_0x3ef37b&&_0x3ef37b[_0x5c42f7(0x361)]===_0x330966[_0x5c42f7(0x361)])return;this['_appendHistoryFromState'](_0x330966);},'state_changed');}[_0x3ca4b6(0x301)](_0x3c5aff){const _0x579c7e=_0x3ca4b6;if(!this['_hass']||!_0x3c5aff)return;const _0x57e0bb=_0x3c5aff['entity_id'],_0x33c85e=_0x3c5aff[_0x579c7e(0x361)],_0x104c97=this['_formatHistoryState'](_0x57e0bb,_0x33c85e),_0x1ad85b=this[_0x579c7e(0x21c)][_0x579c7e(0x27a)][_0x57e0bb],_0x59a724=_0x1ad85b&&_0x1ad85b[_0x579c7e(0x1e3)]&&_0x1ad85b[_0x579c7e(0x1e3)][_0x579c7e(0x2ed)]||_0x57e0bb||_0x579c7e(0x2cf),_0x1cec69=_0x3c5aff[_0x579c7e(0x239)]||new Date()[_0x579c7e(0x235)](),_0x573762=this[_0x579c7e(0x314)][_0x579c7e(0x20a)]||{},_0xce97d8=_0x573762['max_items']||0x4,_0x227c67=_0x573762[_0x579c7e(0x259)]||0x6,_0x4656e4={'entity_id':_0x57e0bb,'raw_state':_0x33c85e,'state':_0x104c97,'label':_0x59a724+':\x20'+_0x104c97,'time':_0x1cec69},_0x3978b5=Date['now'](),_0x3e7f8e=_0x227c67*0x3c*0x3c*0x3e8,_0x22b1cf=this[_0x579c7e(0x223)][_0x579c7e(0x1bd)](_0xdf5478=>{const _0xdf6499=_0x579c7e;if(!_0xdf5478[_0xdf6499(0x236)])return![];const _0x6dcbdc=new Date(_0xdf5478[_0xdf6499(0x236)])[_0xdf6499(0x2e0)]();return _0x3978b5-_0x6dcbdc<=_0x3e7f8e;});this['_historyEntries']=[_0x4656e4,..._0x22b1cf][_0x579c7e(0x2f4)](0x0,_0xce97d8),this['_historyError']=null,this[_0x579c7e(0x2d1)]();}[_0x3ca4b6(0x2e4)](_0x1d584e,_0x448e37=_0x3ca4b6(0x1fc),_0x575550=''){const _0x4c4669=_0x3ca4b6,_0x399758=this[_0x4c4669(0x23e)]();if(!_0x399758[_0x4c4669(0x286)])return'';const _0x5ef719=this['_config'][_0x4c4669(0x1b7)]||_0x4c4669(0x214),_0x4df4a6=this[_0x4c4669(0x314)][_0x4c4669(0x2d7)],_0x469836=this[_0x4c4669(0x314)][_0x4c4669(0x2ec)],_0x17b845=()=>{const _0x4ffba9=_0x4c4669,_0x283bd6=_0x4df4a6[_0x4ffba9(0x2ce)]||_0x4ffba9(0x359),_0x3a7d68=!_0x4df4a6[_0x4ffba9(0x26e)],_0x4ce9ff=!_0x4df4a6['hide_zone_section_name']&&_0x283bd6&&String(_0x283bd6)[_0x4ffba9(0x294)]()!=='';if(!_0x3a7d68&&!_0x4ce9ff)return'';return _0x1fd840`
          <div class="section-header-zones">
            <div class="section-title-zones">${_0x3a7d68?_0x1fd840`<ha-icon icon="mdi:door"></ha-icon>`:''} ${_0x4ce9ff?_0x1fd840`<span>${_0x283bd6}</span>`:''}</div>
          </div>
        `;};if(_0x5ef719==='open_only'){const _0xc69135=_0x399758[_0x4c4669(0x286)],_0x5a8166=Math['min'](0x8,Math['max'](0x1,_0xc69135)),_0x2d01ec=_0x4c4669(0x288)+_0x5a8166+_0x4c4669(0x35c),_0x5f15a7=_0x4df4a6['color']||_0x4c4669(0x24b),_0x44f8fb=_0x4df4a6[_0x4c4669(0x212)]!==![],_0x237ee0=_0x4df4a6['show_zone_name']!==![];return _0x1fd840`
          <div>
            ${_0x17b845()}
            <div class="zones-list">
              <div
                class="zone-slots"
                style="${_0x2d01ec}">
                ${_0x399758[_0x4c4669(0x341)]((_0x365928,_0x45384a)=>{const _0x1df2a0=_0x4c4669,_0x3c0f9d=_0x365928[_0x1df2a0(0x30f)],_0x523870=_0x3c0f9d?_0x1df2a0(0x238):_0x1df2a0(0x2f9),_0x488485=_0x3c0f9d?_0x1df2a0(0x1f7)+_0x5f15a7+';':'',_0x275baf=_0x365928['board_zone']!=null?_0x365928[_0x1df2a0(0x2a7)]:_0x45384a+0x1,_0x3a1ed9=_0x3c0f9d&&_0x44f8fb;return _0x1fd840`
                    <div
                      class="${_0x523870}"
                      style="${_0x488485}">
                      ${_0x3a1ed9?_0x1fd840`<div class="zone-slot-number">${_0x275baf}</div>`:''} ${_0x3c0f9d&&_0x237ee0?_0x1fd840`<div class="zone-slot-name">${_0x365928['name']}</div>`:''}
                    </div>
                  `;})}
              </div>
            </div>
          </div>
        `;}const _0x49fe99=_0x469836[_0x4c4669(0x212)]!==![],_0x5c9b59=_0x469836[_0x4c4669(0x24d)]!==![],_0x50516c=_0x469836[_0x4c4669(0x2ce)]||_0x4c4669(0x359),_0x3ef601=!_0x469836[_0x4c4669(0x26e)],_0x7050bd=!_0x469836[_0x4c4669(0x328)]&&_0x50516c&&String(_0x50516c)[_0x4c4669(0x294)]()!=='',_0x576c55=()=>{if(!_0x3ef601&&!_0x7050bd)return'';return _0x1fd840`
          <div class="section-header-zones">
            <div class="section-title-zones">${_0x3ef601?_0x1fd840`<ha-icon icon="mdi:door"></ha-icon>`:''} ${_0x7050bd?_0x1fd840`<span>${_0x50516c}</span>`:''}</div>
          </div>
        `;},_0x539b9d=_0x448e37==='right',_0x571efb=_0x539b9d?'zones-wrapper-right':'',_0x33e173=_0x539b9d?'zones-list\x20zones-list-fill':'zones-list';return _0x1fd840`
        <div
          class="${_0x571efb}"
          style="${_0x539b9d?_0x575550:''}">
          ${_0x576c55()}
          <div class="${_0x33e173}">
            ${_0x399758[_0x4c4669(0x341)]((_0x1b876f,_0x4e885e)=>{const _0x1d706d=_0x4c4669,_0x400f59=_0x1b876f['isOpen'],_0x42edb1=_0x469836[_0x1d706d(0x312)],_0x259da2=_0x469836[_0x1d706d(0x2ae)],_0x39b212=_0x469836['text_color_on']||_0x1d706d(0x29b),_0x53f536=_0x469836[_0x1d706d(0x276)]||'var(--primary-text-color)',_0x1cdd08=_0x400f59?(_0x42edb1?'background:'+_0x42edb1+';':'')+'color:'+_0x39b212+';':(_0x259da2?_0x1d706d(0x1f7)+_0x259da2+';':'')+_0x1d706d(0x2d2)+_0x53f536+';',_0x1a0718=_0x1b876f['board_zone']!=null?_0x1b876f[_0x1d706d(0x2a7)]:_0x4e885e+0x1;let _0x1a30cc='',_0x3f8fad='';if(_0x5c9b59&&_0x49fe99)_0x1a30cc=_0x1b876f[_0x1d706d(0x1ec)],_0x3f8fad='(Z'+String(_0x1a0718)[_0x1d706d(0x20d)](0x2,'0')+')';else{if(_0x5c9b59&&!_0x49fe99)_0x1a30cc=_0x1b876f[_0x1d706d(0x1ec)];else!_0x5c9b59&&_0x49fe99?_0x1a30cc=String(_0x1a0718):_0x1a30cc='';}const _0x5b1272=this[_0x1d706d(0x232)](_0x1b876f);return _0x1fd840`
                <div class="zone-item">
                  <div class="zone-main">
                    <div class="zone-name">${_0x1a30cc} ${_0x3f8fad?_0x1fd840`<span class="small-text"> ${_0x3f8fad} </span>`:''}</div>
                  </div>
                  <div>
                    <span
                      class="zone-state-badge"
                      style="${_0x1cdd08}">
                      ${_0x5b1272}
                    </span>
                  </div>
                </div>
              `;})}
          </div>
        </div>
      `;}['render'](){const _0xee981f=_0x3ca4b6,_0x4101bf=this[_0xee981f(0x310)]();if(!_0x4101bf)return _0x1fd840`
          <ha-card>
            <div class="body">Alarm entity not found: ${this['_config']['entity']||'No\x20Entity\x20Selected'}</div>
          </ha-card>
        `;const _0x476c80=this['_isArmedLike'](_0x4101bf[_0xee981f(0x361)]),_0x1ba28c=this[_0xee981f(0x1cd)](_0x4101bf),_0x44d25b=this[_0xee981f(0x296)](_0x4101bf),_0x40627f=this[_0xee981f(0x2b0)](_0x476c80),_0x1ee8cb=this['_getDisarmLabel'](),_0x27fa01=this['_countdownValue']!=null&&this[_0xee981f(0x356)]>=0x0?this['_countdownValue']:null,_0x2ff00a=_0x27fa01!=null&&(_0x4101bf['state']===_0xee981f(0x30d)||_0x4101bf[_0xee981f(0x361)]===_0xee981f(0x30e))?_0x1ba28c+'\x20('+_0x27fa01+')':_0x1ba28c,_0x3cbc3d=_0x44d25b?_0xee981f(0x1f7)+_0x44d25b+';color:var(--text-primary-color,#fff);':'',_0x3f4e43=_0x40627f?_0xee981f(0x1f7)+_0x40627f+_0xee981f(0x2b4):'',_0x4d3ea3=_0x40627f?_0xee981f(0x1f5)+_0x40627f+_0xee981f(0x2b4):'',_0x20b50c=this['_config'][_0xee981f(0x2c5)]||{},_0x569e5f=_0x20b50c[_0xee981f(0x31a)]?_0xee981f(0x279)+(_0x20b50c[_0xee981f(0x32f)]||'var(--divider-color)')+';':_0xee981f(0x2ca),_0x2de4b8=Array['isArray'](_0x20b50c[_0xee981f(0x22d)])?_0x20b50c[_0xee981f(0x22d)]:[],_0x1e5bce=_0x2de4b8['some'](_0x2794e7=>_0x2794e7&&String(_0x2794e7['mode'])[_0xee981f(0x221)]()==='disarm')||[0x1,0x2,0x3,0x4,0x5][_0xee981f(0x25b)](_0x93a10c=>String(_0x20b50c[_0xee981f(0x2a9)+_0x93a10c]||'')['toLowerCase']()===_0xee981f(0x2b8)),_0x270072=_0x2de4b8[_0xee981f(0x2a1)](_0x402107=>_0x402107&&_0x402107['index']===0x1)||null,_0x3c612f=_0x2de4b8[_0xee981f(0x2a1)](_0x18f3cb=>_0x18f3cb&&_0x18f3cb[_0xee981f(0x1d9)]===0x2)||null,_0x263888=_0x2de4b8['filter'](_0x3680d9=>_0x3680d9&&_0x3680d9[_0xee981f(0x1d9)]>=0x3),_0xf0b740=_0x263888[_0xee981f(0x286)],_0x1fbf33=_0x20b50c&&_0x20b50c['enable_3d_effects']===!![],_0x51e773=_0x20b50c&&_0x20b50c[_0xee981f(0x299)]?_0x20b50c['effect_variant']:'soft',_0x1c69a7=_0xee981f(0x1c8)+(_0x1fbf33?'\x20keypad-button-3d\x20keypad-button-3d-'+_0x51e773:''),_0x440e11=this[_0xee981f(0x23e)](),_0x1e73fd=_0x440e11&&_0x440e11[_0xee981f(0x286)]>0x0,_0x2a2587=this[_0xee981f(0x314)][_0xee981f(0x209)]||{},_0x26e395=_0x2a2587[_0xee981f(0x327)]&&_0x2a2587[_0xee981f(0x327)][_0xee981f(0x286)]>0x0,_0x45ef6b=!_0x2a2587[_0xee981f(0x2dc)],_0x2bcf77=(_0x2a2587[_0xee981f(0x327)]||[])[_0xee981f(0x341)](_0x268194=>{const _0x550fc9=_0xee981f,_0x5c7854=this[_0x550fc9(0x21c)]['states'][_0x268194],_0x18ce61=_0x5c7854&&_0x5c7854[_0x550fc9(0x1e3)]&&_0x5c7854[_0x550fc9(0x1e3)]['friendly_name']||_0x268194,_0x4b66e4=_0x5c7854&&_0x5c7854['state']==='on',_0x2c13b3=_0x5c7854&&_0x5c7854[_0x550fc9(0x1e3)]&&_0x5c7854[_0x550fc9(0x1e3)][_0x550fc9(0x319)];return{'entity':_0x268194,'name':_0x18ce61,'isOn':_0x4b66e4,'lastTriggered':_0x2c13b3};}),_0xf121e=this[_0xee981f(0x314)]['history']||{},_0x5ee14e=!_0xf121e[_0xee981f(0x355)],_0x160ea3=this[_0xee981f(0x223)]&&this[_0xee981f(0x223)]['length']>0x0,_0x4b9968=this[_0xee981f(0x314)][_0xee981f(0x1c6)]||_0x4101bf[_0xee981f(0x1e3)][_0xee981f(0x2ed)]||_0x4101bf[_0xee981f(0x2d9)],_0x3d3128=this[_0xee981f(0x314)][_0xee981f(0x1b7)]==='open_only'?this['_config'][_0xee981f(0x2d7)][_0xee981f(0x2b2)]:this[_0xee981f(0x314)][_0xee981f(0x2ec)]['show_on'],_0x5bd2c5=_0xf121e[_0xee981f(0x2b2)]||'bottom',_0x1efa4b=_0x1e73fd&&_0x3d3128===_0xee981f(0x35a)||_0x5ee14e&&_0x5bd2c5===_0xee981f(0x35a),_0x27f57e=_0x2a2587[_0xee981f(0x205)],_0x3f62a5=()=>{const _0x26d4c8=_0xee981f;if(!_0x26e395||!_0x45ef6b)return'';const _0x4f1cd4=_0x2a2587[_0x26d4c8(0x350)]||_0x26d4c8(0x2d5),_0xd7fce5=!_0x2a2587['hide_automation_section_icon'],_0x1c8058=!_0x2a2587[_0x26d4c8(0x2d3)]&&_0x4f1cd4&&String(_0x4f1cd4)[_0x26d4c8(0x294)]()!=='',_0x406f91=()=>{if(!_0xd7fce5&&!_0x1c8058)return'';return _0x1fd840`
            <div class="section-header-automations">
              <div class="section-title-automations">${_0xd7fce5?_0x1fd840`<ha-icon icon="mdi:play-circle-outline"></ha-icon>`:''} ${_0x1c8058?_0x1fd840`<span>${_0x4f1cd4}</span>`:''}</div>
            </div>
          `;};return _0x1fd840`
          ${_0x406f91()}
          <div class="automations-list">
            ${_0x2bcf77[_0x26d4c8(0x341)](_0x2fd816=>{const _0x1ba632=_0x26d4c8,_0x284f86=_0x2fd816[_0x1ba632(0x2de)]&&_0x27f57e?_0x1ba632(0x1f7)+_0x27f57e+';color:var(--text-primary-color,#fff);border-color:transparent;':'';return _0x1fd840`
                <div class="automation-item">
                  <div class="automation-main">
                    <div class="automation-name">${_0x2fd816[_0x1ba632(0x1ec)]}</div>
                    <div class="automation-meta">${!_0x2a2587['hide_last_triggered']&&_0x2fd816[_0x1ba632(0x1c5)]?this['_formatTime'](_0x2fd816[_0x1ba632(0x1c5)]):''}</div>
                  </div>
                  <div
                    class="chip ${_0x2fd816[_0x1ba632(0x2de)]?'on':_0x1ba632(0x358)}"
                    style="${_0x284f86}"
                    @click=${()=>this[_0x1ba632(0x306)](_0x2fd816[_0x1ba632(0x30a)])}>
                    ${_0x2fd816[_0x1ba632(0x2de)]?'On':_0x1ba632(0x343)}
                  </div>
                </div>
              `;})}
          </div>
        `;},_0x22ab74=(_0x5f0937='bottom',_0x40aaf7='')=>{const _0x5bca18=_0xee981f;if(!_0x5ee14e)return'';const _0x5b86ca=_0xf121e[_0x5bca18(0x1ff)]||_0x5bca18(0x33f),_0x32d909=!_0xf121e['hide_history_section_icon'],_0xd09c3a=!_0xf121e[_0x5bca18(0x2a3)]&&_0x5b86ca&&String(_0x5b86ca)['trim']()!=='',_0x57cdf0=()=>{if(!_0x32d909&&!_0xd09c3a)return'';return _0x1fd840`
            <div class="section-header-history">
              <div class="section-title-history">${_0x32d909?_0x1fd840`<ha-icon icon="mdi:history"></ha-icon>`:''} ${_0xd09c3a?_0x1fd840`<span>${_0x5b86ca}</span>`:''}</div>
            </div>
          `;},_0x55140e=_0x5f0937===_0x5bca18(0x35a)?'history-list\x20zones-list-fill':'history-list',_0x6f98f3=_0x44b31f=>{const _0x3c1bcb=_0x5bca18;if(_0x44b31f==null)return null;if(typeof _0x44b31f===_0x3c1bcb(0x1e8)&&!isNaN(_0x44b31f))return _0x44b31f+'px';if(typeof _0x44b31f!==_0x3c1bcb(0x266))return null;const _0x7ea10=_0x44b31f[_0x3c1bcb(0x294)]();if(!_0x7ea10)return null;if(/^\d+(?:\.\d+)?$/[_0x3c1bcb(0x291)](_0x7ea10))return _0x7ea10+'px';if(/^\d+(?:\.\d+)?(px|%|vh|vw|vmin|vmax|rem|em)$/[_0x3c1bcb(0x291)](_0x7ea10))return _0x7ea10;return null;};let _0x1f17ef=_0x5f0937===_0x5bca18(0x35a)?'max-height:none;':'';if(_0x5f0937!==_0x5bca18(0x35a)){const _0x2e154e=_0x6f98f3(_0xf121e[_0x5bca18(0x363)]);if(_0x2e154e)_0x1f17ef=_0x5bca18(0x282)+_0x2e154e+';';}let _0x885404;if(this['_historyError'])_0x885404=_0x1fd840`<div
            class="${_0x55140e}"
            style="${_0x1f17ef}">
            <div class="history-item">
              <div class="history-main">
                <div class="history-message">${this[_0x5bca18(0x218)]}</div>
              </div>
            </div>
          </div>`;else!_0x160ea3?_0x885404=_0x1fd840`<div
            class="${_0x55140e}"
            style="${_0x1f17ef}">
            <div class="history-item">
              <div class="history-main">
                <div class="history-message">No recent activity.</div>
              </div>
            </div>
          </div>`:_0x885404=_0x1fd840`
            <div
              class="${_0x55140e}"
              style="${_0x1f17ef}">
              ${this[_0x5bca18(0x223)][_0x5bca18(0x341)](_0x449eb1=>{const _0x2e6e4c=_0x5bca18,_0x47d8b4=_0x449eb1['label'];return _0x1fd840`
                  <div class="history-item">
                    <div class="history-main">
                      <div class="history-message">${_0x47d8b4}</div>
                      <div class="history-meta">${this[_0x2e6e4c(0x228)](_0x449eb1[_0x2e6e4c(0x236)])}</div>
                    </div>
                  </div>
                `;})}
            </div>
          `;if(_0x5f0937===_0x5bca18(0x35a))return _0x1fd840`<div
            class="history-wrapper-right"
            style="${_0x40aaf7}">
            ${_0x57cdf0()}${_0x885404}
          </div>`;return _0x1fd840`${_0x57cdf0()}${_0x885404}`;};let _0x2d8741='',_0x528f8c='',_0x2a270a=null,_0x3b802c=0x0;if(_0x20b50c[_0xee981f(0x2a4)]!=null){const _0x14b0e2=Number(_0x20b50c[_0xee981f(0x2a4)]);!isNaN(_0x14b0e2)&&(_0x2d8741+=_0xee981f(0x265)+_0x14b0e2+_0xee981f(0x2b5));}if(_0x20b50c['keypad_height']!=null){if(typeof _0x20b50c[_0xee981f(0x2fa)]===_0xee981f(0x1e8))_0x2a270a=_0x20b50c[_0xee981f(0x2fa)],_0x2d8741+=_0xee981f(0x1db)+_0x2a270a+_0xee981f(0x1cf);else{if(typeof _0x20b50c['keypad_height']===_0xee981f(0x266)){const _0x20c834=_0x20b50c[_0xee981f(0x2fa)][_0xee981f(0x294)]();if(/^\d+$/[_0xee981f(0x291)](_0x20c834))_0x2a270a=Number(_0x20c834),_0x2d8741+=_0xee981f(0x1db)+_0x20c834+_0xee981f(0x1cf);else{if(_0x20c834[_0xee981f(0x221)]()['endsWith']('px')){const _0x387cd1=parseFloat(_0x20c834);!isNaN(_0x387cd1)&&(_0x2a270a=_0x387cd1),_0x2d8741+=_0xee981f(0x1db)+_0x20c834+';';}else _0x2d8741+=_0xee981f(0x1db)+_0x20c834+';';}}}}if(_0x2a270a!=null){const _0x37d7fb=_0x2a270a/0x4;_0x3b802c=_0xf0b740?_0x37d7fb*0.4:0x0,_0xf0b740&&(_0x528f8c=_0xee981f(0x1db)+_0x3b802c+'px;');}const _0x17e817=(_0x1e73fd&&_0x3d3128===_0xee981f(0x35a)?0x1:0x0)+(_0x5ee14e&&_0x5bd2c5==='right'?0x1:0x0),_0x4b0ee5=_0x2a270a!=null?Math[_0xee981f(0x2bb)](_0x2a270a+_0x3b802c):0x0,_0x5ab6eb=(this[_0xee981f(0x1f9)]!=null&&this[_0xee981f(0x1f9)]>0x0?this[_0xee981f(0x1f9)]:_0x4b0ee5)||0x0,_0xbbb144=0xa,_0x11e77c=_0x17e817>0x0?Math['max'](0x78,Math[_0xee981f(0x2ff)]((_0x5ab6eb-_0xbbb144*(_0x17e817-0x1))/_0x17e817)):0x0,_0x3afd28=_0x1e73fd&&_0x3d3128===_0xee981f(0x35a)&&_0x11e77c?_0xee981f(0x282)+_0x11e77c+_0xee981f(0x262):'',_0x318e0d=_0x5ee14e&&_0x5bd2c5===_0xee981f(0x35a)&&_0x11e77c?_0xee981f(0x282)+_0x11e77c+_0xee981f(0x262):'';return _0x1fd840`
        <ha-card>
          ${_0x1efa4b?'':_0x1fd840`
                <div class="header">
                  <div class="title">
                    ${this[_0xee981f(0x314)]['title']?_0x1fd840`
                          <ha-icon .icon=${_0x4101bf[_0xee981f(0x1e3)][_0xee981f(0x1fd)]||_0xee981f(0x270)}></ha-icon>
                          <span>${_0x4b9968}</span>
                        `:''}
                  </div>
                  <div class="header-disarm-cell">
                    ${_0x1e5bce?'':_0x1fd840`
                          <button
                            class="header-disarm-btn ${!_0x476c80?_0xee981f(0x329):''}"
                            style="${_0x3f4e43}"
                            @click=${()=>this[_0xee981f(0x2b3)](_0xee981f(0x2b8))}
                            ?disabled=${this['_busy']||!_0x476c80}>
                            <ha-icon icon="mdi:shield-off"></ha-icon>
                            <span>${_0x1ee8cb}</span>
                          </button>
                      `}
                  </div>
                  <div class="header-status">
                    <span
                      class="state-label"
                      style="${_0x3cbc3d}">
                      ${_0x2ff00a}
                    </span>
                  </div>
                </div>
              `}

          <div class="body ${_0x1efa4b?'body-split':''}">
            <div class="${_0x1efa4b?_0xee981f(0x241):''}">
              ${_0x1efa4b?_0x1fd840`
                    <div class="header-leftonly">
                      <div class="title">
                        ${this[_0xee981f(0x314)][_0xee981f(0x1c6)]?_0x1fd840`
                              <ha-icon .icon=${_0x4101bf[_0xee981f(0x1e3)][_0xee981f(0x1fd)]||_0xee981f(0x270)}></ha-icon>
                              <span>${_0x4b9968}</span>
                            `:''}
                      </div>

                      <div class="header-disarm-cell">
                        ${_0x1e5bce?'':_0x1fd840`
                              <button
                                class="header-disarm-btn ${!_0x476c80?'inactive':''}"
                                style="${_0x3f4e43}"
                                @click=${()=>this[_0xee981f(0x2b3)](_0xee981f(0x2b8))}
                                ?disabled=${this[_0xee981f(0x263)]||!_0x476c80}>
                                <ha-icon icon="mdi:shield-off"></ha-icon>
                                <span>${_0x1ee8cb}</span>
                              </button>
                          `}
                      </div>

                      <div class="header-status">
                        <span
                          class="state-label"
                          style="${_0x3cbc3d}">
                          ${_0x2ff00a}
                        </span>
                      </div>
                    </div>
                  `:''}
              ${this[_0xee981f(0x314)][_0xee981f(0x2c5)]&&this[_0xee981f(0x314)]['keypad'][_0xee981f(0x2d6)]?'':_0x1fd840`
                    <div class="code-section">
                      <div class="code-row">
                        <div class="code-display">
                          ${this[_0xee981f(0x2ac)][_0xee981f(0x286)]?'*'[_0xee981f(0x1ce)](this[_0xee981f(0x2ac)][_0xee981f(0x286)]):'—'}
                        </div>
                        <button
                          class="code-backspace-btn"
                          @click=${()=>this[_0xee981f(0x340)]()}
                          ?disabled=${this[_0xee981f(0x263)]||!this[_0xee981f(0x2ac)][_0xee981f(0x286)]}
                        >
                          <ha-icon icon="mdi:backspace"></ha-icon>
                        </button>
                      </div>

                      <div class="keypad" style="${_0x2d8741}">
                        ${['1','2','3','4','5','6','7','8','9'][_0xee981f(0x341)](_0x10175c=>_0x1fd840`
                            <button
                              class=${_0x1c69a7}
                              style="${_0x569e5f}"
                              @click=${()=>this['_handleKeypadPress'](_0x10175c)}
                              ?disabled=${this[_0xee981f(0x263)]}>
                              ${_0x10175c}
                            </button>
                          `)}

                        ${!_0x270072?_0x1fd840`
                                <button
                                  class=${_0x1c69a7}
                                  style="${_0x569e5f}visibility:hidden;"
                                  disabled></button>
                              `:_0x270072[_0xee981f(0x1c3)]===_0xee981f(0x2b8)?_0x1fd840`
                                  <button
                                    class=${_0x1c69a7}
                                    style="${_0x569e5f}${_0x4d3ea3}"
                                    @click=${()=>this[_0xee981f(0x2b3)](_0xee981f(0x2b8))}
                                    ?disabled=${this[_0xee981f(0x263)]||!_0x476c80}>
                                    <ha-icon icon="mdi:shield-off"></ha-icon>
                                    <span>${_0x270072['label']||_0x1ee8cb}</span>
                                  </button>
                                `:_0x1fd840`
                                  <button
                                    class=${_0x1c69a7}
                                    style="${_0x569e5f}"
                                    @click=${()=>this[_0xee981f(0x2b3)](_0x270072[_0xee981f(0x1c3)])}
                                    ?disabled=${this[_0xee981f(0x263)]}>
                                    ${_0x270072[_0xee981f(0x237)]||''}
                                  </button>
                                `}

                        <button
                          class=${_0x1c69a7}
                          style="${_0x569e5f}"
                          @click=${()=>this['_handleKeypadPress']('0')}
                          ?disabled=${this[_0xee981f(0x263)]}
                        >
                          0
                        </button>

                        ${!_0x3c612f?_0x1fd840`
                                <button
                                  class=${_0x1c69a7}
                                  style="${_0x569e5f}visibility:hidden;"
                                  disabled></button>
                              `:_0x3c612f[_0xee981f(0x1c3)]===_0xee981f(0x2b8)?_0x1fd840`
                                  <button
                                    class=${_0x1c69a7}
                                    style="${_0x569e5f}${_0x4d3ea3}"
                                    @click=${()=>this['_handleAction']('disarm')}
                                    ?disabled=${this[_0xee981f(0x263)]||!_0x476c80}>
                                    <ha-icon icon="mdi:shield-off"></ha-icon>
                                    <span>${_0x3c612f[_0xee981f(0x237)]||_0x1ee8cb}</span>
                                  </button>
                                `:_0x1fd840`
                                  <button
                                    class=${_0x1c69a7}
                                    style="${_0x569e5f}"
                                    @click=${()=>this['_handleAction'](_0x3c612f[_0xee981f(0x1c3)])}
                                    ?disabled=${this[_0xee981f(0x263)]}>
                                    ${_0x3c612f[_0xee981f(0x237)]||_0xee981f(0x2f5)}
                                  </button>
                                `}
                      </div>

                      ${_0xf0b740?_0x1fd840`
                              <div
                                class="keypad-extra-row"
                                style="grid-template-columns: repeat(${_0xf0b740}, 1fr);${_0x528f8c}">
                                ${_0x263888[_0xee981f(0x341)](_0x5a52c8=>_0x1fd840`
                                    ${_0x5a52c8[_0xee981f(0x1c3)]===_0xee981f(0x2b8)?_0x1fd840`
                                          <button
                                            class=${_0x1c69a7}
                                            style="${_0x569e5f}${_0x4d3ea3}"
                                            @click=${()=>this['_handleAction'](_0xee981f(0x2b8))}
                                            ?disabled=${this[_0xee981f(0x263)]||!_0x476c80}>
                                            <ha-icon icon="mdi:shield-off"></ha-icon>
                                            <span>${_0x5a52c8[_0xee981f(0x237)]||_0x1ee8cb}</span>
                                          </button>
                                        `:_0x1fd840`
                                          <button
                                            class=${_0x1c69a7}
                                            style="${_0x569e5f}"
                                            @click=${()=>this[_0xee981f(0x2b3)](_0x5a52c8['mode'])}
                                            ?disabled=${this['_busy']}>
                                            ${_0x5a52c8[_0xee981f(0x237)]}
                                          </button>
                                        `}
                                  `)}
                              </div>
                            `:''}
                      </div>

                    </div>
                  `}
              ${_0x1e73fd&&_0x3d3128===_0xee981f(0x1fc)?this[_0xee981f(0x2e4)](_0x4101bf,_0xee981f(0x1fc),''):''} ${_0x1efa4b&&_0x45ef6b&&_0x26e395?_0x1fd840`<div class="body-automations-bottom">${_0x3f62a5()}</div>`:''}
            </div>

            ${_0x1efa4b?_0x1fd840` <div class="body-side body-side-align-keypad">${_0x1e73fd&&_0x3d3128==='right'?this[_0xee981f(0x2e4)](_0x4101bf,_0xee981f(0x35a),_0x3afd28):''} ${_0x5ee14e&&_0x5bd2c5===_0xee981f(0x35a)?_0x22ab74(_0xee981f(0x35a),_0x318e0d):''}</div> `:''} ${this[_0xee981f(0x320)]?_0x1fd840`<div class="message">${this['_message']}</div>`:''}
          </div>

          ${_0x5ee14e&&_0x5bd2c5!=='right'?_0x1fd840`<div class="body-history-bottom">${_0x22ab74(_0xee981f(0x1fc),'')}</div>`:''} ${_0x45ef6b&&_0x26e395&&!_0x1efa4b?_0x1fd840`<div class="body-automations-bottom">${_0x3f62a5()}</div>`:''}
          ${this[_0xee981f(0x314)][_0xee981f(0x2c5)]&&this[_0xee981f(0x314)][_0xee981f(0x2c5)][_0xee981f(0x2d6)]?_0x1fd840`
                <div class="keypad-fab-wrapper">
                  <button
                    class="keypad-fab"
                    @click=${()=>this['_openDevicePopup']()}
                    ?disabled=${this[_0xee981f(0x263)]}>
                    <ha-icon icon="mdi:dialpad"></ha-icon>
                  </button>
                </div>
              `:''}
        </ha-card>
      `;}}class _0x3b9d75 extends _0x27d0b0{static get[_0x3ca4b6(0x326)](){return{'hass':{},'_config':{'type':Object},'_openGlobal':{'type':Boolean},'_openKeypad':{'type':Boolean},'_openZones':{'type':Boolean},'_openView':{'type':Boolean},'_openColors':{'type':Boolean},'_openHistory':{'type':Boolean},'_openAutomations':{'type':Boolean},'_openNameMapping':{'type':Boolean}};}constructor(){const _0xa38dab=_0x3ca4b6;super(),this[_0xa38dab(0x337)]=!![],this[_0xa38dab(0x1ba)]=![],this[_0xa38dab(0x295)]=![],this[_0xa38dab(0x255)]=![],this['_openColors']=![],this[_0xa38dab(0x1b9)]=![],this['_openAutomations']=![],this[_0xa38dab(0x1e2)]=![];}['setConfig'](_0xa61cb7){const _0x58b5d6=_0x3ca4b6;this[_0x58b5d6(0x314)]=JSON[_0x58b5d6(0x307)](JSON[_0x58b5d6(0x330)](_0xa61cb7));}[_0x3ca4b6(0x357)](_0xc858f4){const _0x4edba9=_0x3ca4b6;this[_0x4edba9(0x314)]=_0xc858f4,this[_0x4edba9(0x2db)](new CustomEvent(_0x4edba9(0x285),{'detail':{'config':this[_0x4edba9(0x314)]},'bubbles':!![],'composed':!![]}));}[_0x3ca4b6(0x332)](_0x1fae0b){const _0x535294=_0x3ca4b6;this[_0x535294(0x28a)+_0x1fae0b]=!this[_0x535294(0x28a)+_0x1fae0b],this[_0x535294(0x2d1)]();}[_0x3ca4b6(0x2b1)](){const _0x5c471d=_0x3ca4b6,_0x2a1b78=[...this[_0x5c471d(0x314)][_0x5c471d(0x208)]||[]];_0x2a1b78[_0x5c471d(0x2e8)]({'entity':'','name':'','board_zone':(_0x2a1b78[_0x5c471d(0x286)]+0x1)[_0x5c471d(0x1d5)]()}),this['_updateConfig']({...this[_0x5c471d(0x314)],'zones':_0x2a1b78});}[_0x3ca4b6(0x26a)](_0x5c0109){const _0x533be=_0x3ca4b6,_0x1c8ee1=[...this[_0x533be(0x314)][_0x533be(0x208)]||[]];_0x1c8ee1[_0x533be(0x240)](_0x5c0109,0x1),this[_0x533be(0x357)]({...this['_config'],'zones':_0x1c8ee1});}['_addAutomation'](){const _0x554a18=_0x3ca4b6,_0x4a3cc3={...this['_config'][_0x554a18(0x209)]||{'automation_list':[]}},_0x252c08=[..._0x4a3cc3[_0x554a18(0x327)]||[]];_0x252c08[_0x554a18(0x2e8)](''),_0x4a3cc3['automation_list']=_0x252c08,this[_0x554a18(0x357)]({...this[_0x554a18(0x314)],'automations':_0x4a3cc3});}['_removeAutomation'](_0x4a2ec7){const _0x23986c=_0x3ca4b6,_0x1e26a9={...this[_0x23986c(0x314)][_0x23986c(0x209)]},_0x4a4ea8=[..._0x1e26a9[_0x23986c(0x327)]||[]];_0x4a4ea8['splice'](_0x4a2ec7,0x1),_0x1e26a9['automation_list']=_0x4a4ea8,this[_0x23986c(0x357)]({...this[_0x23986c(0x314)],'automations':_0x1e26a9});}['_onSelectOpened'](_0x55e4c6){const _0x5cdc19=_0x3ca4b6,_0x568804=_0x55e4c6['target'];if(!_0x568804||!_0x568804[_0x5cdc19(0x25d)])return;const _0x354e0d=_0x568804['shadowRoot']['querySelector']('mwc-menu-surface')||_0x568804['shadowRoot'][_0x5cdc19(0x31c)](_0x5cdc19(0x24f));_0x354e0d&&(_0x5cdc19(0x256)in _0x354e0d&&(_0x354e0d[_0x5cdc19(0x256)]='BOTTOM_START'),_0x5cdc19(0x2fd)in _0x354e0d&&(_0x354e0d[_0x5cdc19(0x2fd)]=!![]));}[_0x3ca4b6(0x349)](){const _0x5da5f6=_0x3ca4b6;if(!this[_0x5da5f6(0x21a)]||!this[_0x5da5f6(0x314)])return _0x1fd840``;const _0x9ed74a=this[_0x5da5f6(0x314)],_0xb8a65d=_0x9ed74a['keypad']||{},_0x1837e0=_0x9ed74a[_0x5da5f6(0x2d7)]||{},_0x1e2925=_0x9ed74a[_0x5da5f6(0x2ec)]||{},_0x4efaeb=_0x9ed74a[_0x5da5f6(0x20a)]||{},_0x22116f=_0x9ed74a[_0x5da5f6(0x1cc)]||{},_0x16bd46=_0x9ed74a['automations']||{},_0x1c7b30=_0x9ed74a['name_mapping']||{},_0x63c707=(_0x3f36c9,_0x1260f4)=>_0x3f36c9&&typeof _0x3f36c9===_0x5da5f6(0x266)&&_0x3f36c9['startsWith']('#')?_0x3f36c9:_0x1260f4,_0x559ee5=_0x63c707(_0x16bd46[_0x5da5f6(0x205)],_0x5da5f6(0x346)),_0xb9c39a=_0x63c707(_0x22116f[_0x5da5f6(0x2ab)],_0x5da5f6(0x247)),_0x12a8e3=_0x63c707(_0x22116f[_0x5da5f6(0x1da)],_0x5da5f6(0x2fb)),_0x5d49ec=_0x63c707(_0x22116f['disarming'],'#ffa500'),_0x6bcf43=_0x63c707(_0x22116f['armed_away'],_0x5da5f6(0x346)),_0x324d1a=_0x63c707(_0x22116f[_0x5da5f6(0x20b)],_0x5da5f6(0x309)),_0x1a9ce7=_0x63c707(_0x22116f[_0x5da5f6(0x252)],_0x5da5f6(0x231)),_0x3d50c5=_0x63c707(_0x22116f['armed_vacation'],_0x5da5f6(0x231)),_0x13dd8f=_0x63c707(_0x22116f[_0x5da5f6(0x35e)],'#ffff00'),_0x25a8d1=_0x63c707(_0x22116f[_0x5da5f6(0x30d)],_0x5da5f6(0x2a2)),_0x2ab10d=_0x63c707(_0x22116f['pending'],'#ffa500'),_0x59bfa2=_0x63c707(_0x22116f[_0x5da5f6(0x2b6)],_0x5da5f6(0x1f0)),_0x5af6f5=_0x1837e0[_0x5da5f6(0x201)]&&typeof _0x1837e0['color']===_0x5da5f6(0x266)&&_0x1837e0[_0x5da5f6(0x201)][_0x5da5f6(0x22a)]('#')?_0x1837e0[_0x5da5f6(0x201)]:'#ff0000',_0x3f2007=_0x1e2925[_0x5da5f6(0x312)]&&typeof _0x1e2925[_0x5da5f6(0x312)]==='string'&&_0x1e2925['color_on'][_0x5da5f6(0x22a)]('#')?_0x1e2925[_0x5da5f6(0x312)]:_0x5da5f6(0x1f0),_0x4e8d92=_0x1e2925[_0x5da5f6(0x2ae)]&&typeof _0x1e2925['color_off']===_0x5da5f6(0x266)&&_0x1e2925['color_off'][_0x5da5f6(0x22a)]('#')?_0x1e2925['color_off']:_0x5da5f6(0x31d),_0x1e5b5c=_0x1e2925[_0x5da5f6(0x313)]&&typeof _0x1e2925[_0x5da5f6(0x313)]===_0x5da5f6(0x266)&&_0x1e2925[_0x5da5f6(0x313)][_0x5da5f6(0x22a)]('#')?_0x1e2925[_0x5da5f6(0x313)]:'#ffffff',_0x43706e=_0x1e2925[_0x5da5f6(0x276)]&&typeof _0x1e2925[_0x5da5f6(0x276)]===_0x5da5f6(0x266)&&_0x1e2925['text_color_off'][_0x5da5f6(0x22a)]('#')?_0x1e2925[_0x5da5f6(0x276)]:_0x5da5f6(0x1c9),_0x4e35e2=_0xb8a65d[_0x5da5f6(0x32f)]&&typeof _0xb8a65d['keypad_border_color']===_0x5da5f6(0x266)&&_0xb8a65d[_0x5da5f6(0x32f)][_0x5da5f6(0x22a)]('#')?_0xb8a65d[_0x5da5f6(0x32f)]:_0x5da5f6(0x2dd);let _0x2620c2=undefined;if(this[_0x5da5f6(0x314)][_0x5da5f6(0x30a)]&&this['hass']['entities']){const _0x833954=this['hass']['entities'][this['_config'][_0x5da5f6(0x30a)]];if(_0x833954&&_0x833954['device_id']){const _0x3139ea=Object[_0x5da5f6(0x273)](this[_0x5da5f6(0x21a)]['entities'])['filter'](_0x2308cd=>_0x2308cd['device_id']===_0x833954[_0x5da5f6(0x1d7)]&&_0x2308cd[_0x5da5f6(0x2d9)]['startsWith'](_0x5da5f6(0x26c)))[_0x5da5f6(0x341)](_0x4ce162=>_0x4ce162[_0x5da5f6(0x2d9)]),_0x1d7ccc=Object[_0x5da5f6(0x2e7)](this['hass'][_0x5da5f6(0x27a)]||{})['filter'](_0x3833fb=>_0x3833fb[_0x5da5f6(0x22a)](_0x5da5f6(0x342)));_0x2620c2=[..._0x3139ea,..._0x1d7ccc];}}const _0x4bb415=[{'value':'false','label':_0x5da5f6(0x2c1)},{'value':_0x5da5f6(0x2b8),'label':_0x5da5f6(0x352)},{'value':_0x5da5f6(0x31e),'label':'Arm\x20Stay'},{'value':_0x5da5f6(0x260),'label':'Arm\x20Away'},{'value':'arm_night','label':_0x5da5f6(0x2c0)},{'value':_0x5da5f6(0x305),'label':'Arm\x20Vacation'},{'value':_0x5da5f6(0x2be),'label':'Arm\x20Bypass'}];return _0x1fd840`
        <div class="card-config">
          <div class="section">
            <div
              class="section-header"
              @click=${()=>this[_0x5da5f6(0x332)](_0x5da5f6(0x251))}>
              <span>✨ Main Settings</span>
              <ha-icon icon=${this[_0x5da5f6(0x337)]?'mdi:chevron-up':'mdi:chevron-down'}></ha-icon>
            </div>
            ${this[_0x5da5f6(0x337)]?_0x1fd840`
                  <div class="section-body">
                    <p class="label">Alarm Entity</p>
                    <ha-selector
                      .hass=${this['hass']}
                      .selector=${{'entity':{'domain':_0x5da5f6(0x30b)}}}
                      .value=${_0x9ed74a[_0x5da5f6(0x30a)]}
                      @value-changed=${_0x362b15=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'entity':_0x362b15[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]})}></ha-selector>

                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x35d)}
                      .value=${_0x9ed74a[_0x5da5f6(0x1c6)]||''}
                      @value-changed=${_0x2e4a7a=>this['_updateConfig']({..._0x9ed74a,'title':_0x2e4a7a[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]})}></ha-selector>

                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'select':{'mode':_0x5da5f6(0x338),'options':[{'value':_0x5da5f6(0x214),'label':_0x5da5f6(0x2cd)},{'value':_0x5da5f6(0x275),'label':_0x5da5f6(0x2b7)}]}}}
                      .label=${_0x5da5f6(0x351)}
                      .value=${_0x9ed74a[_0x5da5f6(0x1b7)]||_0x5da5f6(0x214)}
                      @value-changed=${_0x4ca1e4=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'zone_view':_0x4ca1e4[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]})}></ha-selector>
                  </div>
                `:''}
          </div>

          <div class="section">
            <div
              class="section-header"
              @click=${()=>this[_0x5da5f6(0x332)]('Keypad')}>
              <span>🔢 Keypad Configuration</span>
              <ha-icon icon=${this[_0x5da5f6(0x1ba)]?_0x5da5f6(0x222):'mdi:chevron-down'}></ha-icon>
            </div>
            ${this[_0x5da5f6(0x1ba)]?_0x1fd840`
                  <div class="section-body">
                    <div class="toggle-row">
                      <span>Hide Keypad (Icon Mode)</span>
                      <ha-switch
                        .checked=${_0xb8a65d[_0x5da5f6(0x2d6)]}
                        @change=${_0x4f9832=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'keypad':{..._0xb8a65d,'hide_keypad_and_show_as_icon':_0x4f9832['target'][_0x5da5f6(0x2af)]}})}></ha-switch>
                    </div>
                    <div class="toggle-row">
                      <span>Show Borders</span>
                      <ha-switch
                        .checked=${_0xb8a65d[_0x5da5f6(0x31a)]!==![]}
                        @change=${_0x135684=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'keypad':{..._0xb8a65d,'show_keypad_borders':_0x135684[_0x5da5f6(0x206)][_0x5da5f6(0x2af)]}})}></ha-switch>
                    </div>
                    <div class="toggle-row">
                      <span>3D &amp; Click Effects</span>
                      <ha-switch
                        .checked=${_0xb8a65d['enable_3d_effects']===!![]}
                        @change=${_0x591109=>this['_updateConfig']({..._0x9ed74a,'keypad':{..._0xb8a65d,'enable_3d_effects':_0x591109[_0x5da5f6(0x206)]['checked']}})}></ha-switch>
                    </div>

                    ${_0xb8a65d[_0x5da5f6(0x32c)]===!![]?_0x1fd840`
                          <div class="grid-2">
                            <ha-selector
                              .hass=${this[_0x5da5f6(0x21a)]}
                              .selector=${{'select':{'mode':_0x5da5f6(0x338),'options':[{'value':_0x5da5f6(0x1df),'label':_0x5da5f6(0x245)},{'value':_0x5da5f6(0x34f),'label':_0x5da5f6(0x24a)},{'value':_0x5da5f6(0x33b),'label':'Inset\x20(Sunken)'}]}}}
                              .label=${_0x5da5f6(0x22f)}
                              .value=${_0xb8a65d[_0x5da5f6(0x299)]||'soft'}
                              @value-changed=${_0x55d563=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'keypad':{..._0xb8a65d,'effect_variant':_0x55d563[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>
                          </div>
                        `:''}
                    ${_0xb8a65d[_0x5da5f6(0x31a)]!==![]?_0x1fd840`
                          <div class="color-row">
                            <span>Border Color</span>
                            <input
                              class="color-input"
                              type="color"
                              .value=${_0x4e35e2}
                              @input=${_0x198de7=>this['_updateConfig']({..._0x9ed74a,'keypad':{..._0xb8a65d,'keypad_border_color':_0x198de7[_0x5da5f6(0x206)][_0x5da5f6(0x29f)]}})} />
                          </div>
                        `:''}

                    <div class="grid-2">
                      <ha-selector
                        .hass=${this[_0x5da5f6(0x21a)]}
                        .selector=${{'text':{}}}
                        .label=${_0x5da5f6(0x28d)}
                        .value=${String(_0xb8a65d['keypad_width']!=null?_0xb8a65d[_0x5da5f6(0x2a4)]:0x64)}
                        @value-changed=${_0x381d00=>this['_updateConfig']({..._0x9ed74a,'keypad':{..._0xb8a65d,'keypad_width':_0x381d00[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>
                      <ha-selector
                        .hass=${this[_0x5da5f6(0x21a)]}
                        .selector=${{'text':{}}}
                        .label=${_0x5da5f6(0x2f0)}
                        .value=${String(_0xb8a65d['keypad_height']!=null?_0xb8a65d[_0x5da5f6(0x2fa)]:0x122)}
                        @value-changed=${_0x4c3f1a=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'keypad':{..._0xb8a65d,'keypad_height':_0x4c3f1a[_0x5da5f6(0x268)]['value']}})}></ha-selector>
                    </div>

                    <p class="label">Action Buttons</p>
                    ${[0x1,0x2,0x3,0x4,0x5][_0x5da5f6(0x341)](_0x26efc6=>{const _0x149608=_0x5da5f6,_0x160005=(_0x26efc6===0x2?_0x4bb415[_0x149608(0x1bd)](_0x167ed6=>_0x167ed6[_0x149608(0x29f)]!==_0x149608(0x316)):_0x4bb415)[_0x149608(0x341)](_0xbfd6f8=>({'value':_0xbfd6f8['value'],'label':_0xbfd6f8[_0x149608(0x237)]})),_0x2d3eaf=_0xb8a65d[_0x149608(0x2a9)+_0x26efc6],_0x15d53e=_0x2d3eaf===![]?'false':_0x2d3eaf==null?_0x26efc6===0x2?'arm_away':_0x149608(0x316):String(_0x2d3eaf);return _0x1fd840`
                        <div class="grid-2">
                          <ha-selector
                            .hass=${this[_0x149608(0x21a)]}
                            .selector=${{'select':{'mode':_0x149608(0x338),'options':_0x160005}}}
                            .label=${'Btn\x20'+_0x26efc6+_0x149608(0x315)}
                            .value=${_0x15d53e}
                            @value-changed=${_0x59fb6a=>{const _0x45c41f=_0x149608,_0x35a8bb=_0x59fb6a['detail'][_0x45c41f(0x29f)];this[_0x45c41f(0x357)]({..._0x9ed74a,'keypad':{..._0xb8a65d,['action_button_'+_0x26efc6]:_0x35a8bb===_0x45c41f(0x316)?![]:_0x35a8bb}});}}></ha-selector>
                          <ha-selector
                            .hass=${this[_0x149608(0x21a)]}
                            .selector=${{'text':{}}}
                            .label=${_0x149608(0x246)+_0x26efc6+_0x149608(0x2c7)}
                            .value=${_0xb8a65d[_0x149608(0x2a9)+_0x26efc6+'_name']||''}
                            @value-changed=${_0x1ceb09=>this[_0x149608(0x357)]({..._0x9ed74a,'keypad':{..._0xb8a65d,[_0x149608(0x2a9)+_0x26efc6+_0x149608(0x227)]:_0x1ceb09['detail'][_0x149608(0x29f)]}})}></ha-selector>
                        </div>
                      `;})}
                  </div>
                `:''}
          </div>

          <div class="section">
            <div
              class="section-header"
              @click=${()=>this[_0x5da5f6(0x332)](_0x5da5f6(0x359))}>
              <span>📡 Zones (Sensors)</span>
              <ha-icon icon=${this[_0x5da5f6(0x295)]?_0x5da5f6(0x222):_0x5da5f6(0x1f6)}></ha-icon>
            </div>
            ${this['_openZones']?_0x1fd840`
                  <div class="section-body">
                    ${(_0x9ed74a[_0x5da5f6(0x208)]||[])[_0x5da5f6(0x341)]((_0x2b5083,_0x2fe40c)=>_0x1fd840`
                        <div class="sub-item">
                          <div class="sub-item-header">
                            <span>Zone ${_0x2fe40c+0x1}</span>
                            <button
                              class="zone-remove-btn"
                              title="Remove zone"
                              @click=${()=>this[_0x5da5f6(0x26a)](_0x2fe40c)}>
                              ×
                            </button>
                          </div>

                          <ha-selector
                            .hass=${this[_0x5da5f6(0x21a)]}
                            .selector=${{'entity':{'domain':['binary_sensor',_0x5da5f6(0x1dd)],'include_entities':_0x2620c2}}}
                            .value=${_0x2b5083[_0x5da5f6(0x30a)]}
                            @value-changed=${_0x46cadb=>{const _0x347677=_0x5da5f6,_0x93c1a9=[..._0x9ed74a[_0x347677(0x208)]];_0x93c1a9[_0x2fe40c]={..._0x93c1a9[_0x2fe40c],'entity':_0x46cadb[_0x347677(0x268)]['value']},this[_0x347677(0x357)]({..._0x9ed74a,'zones':_0x93c1a9});}}></ha-selector>
                          <div class="grid-2">
                            <ha-selector
                              .hass=${this['hass']}
                              .selector=${{'text':{}}}
                              .label=${_0x5da5f6(0x1c7)}
                              .value=${_0x2b5083[_0x5da5f6(0x1ec)]||''}
                              @value-changed=${_0x1a55fa=>{const _0x3d0745=_0x5da5f6,_0x138e98=[..._0x9ed74a[_0x3d0745(0x208)]];_0x138e98[_0x2fe40c]={..._0x138e98[_0x2fe40c],'name':_0x1a55fa['detail'][_0x3d0745(0x29f)]},this[_0x3d0745(0x357)]({..._0x9ed74a,'zones':_0x138e98});}}></ha-selector>
                            <ha-selector
                              .hass=${this['hass']}
                              .selector=${{'text':{}}}
                              .label=${_0x5da5f6(0x33e)}
                              .value=${String(_0x2b5083['board_zone']!=null?_0x2b5083[_0x5da5f6(0x2a7)]:'')}
                              @value-changed=${_0x5a7681=>{const _0x401a1b=_0x5da5f6,_0x1f7b5e=[..._0x9ed74a[_0x401a1b(0x208)]];_0x1f7b5e[_0x2fe40c]={..._0x1f7b5e[_0x2fe40c],'board_zone':_0x5a7681[_0x401a1b(0x268)][_0x401a1b(0x29f)]},this[_0x401a1b(0x357)]({..._0x9ed74a,'zones':_0x1f7b5e});}}></ha-selector>
                          </div>
                        </div>
                      `)}
                    <mwc-button
                      raised
                      @click=${this['_addZone']}>
                      <ha-icon icon="mdi:plus"></ha-icon>
                      Add Zone
                    </mwc-button>
                  </div>
                `:''}
          </div>

          ${_0x9ed74a['zone_view']===_0x5da5f6(0x214)?_0x1fd840`
                <div class="section">
                  <div
                    class="section-header"
                    @click=${()=>this['_toggleSection']('View')}>
                    <span>🔛 Open Only Mode Settings</span>
                    <ha-icon icon=${this[_0x5da5f6(0x255)]?_0x5da5f6(0x222):'mdi:chevron-down'}></ha-icon>
                  </div>
                  ${this[_0x5da5f6(0x255)]?_0x1fd840`
                        <div class="section-body">
                          <ha-selector
                            .hass=${this[_0x5da5f6(0x21a)]}
                            .selector=${{'text':{}}}
                            .label=${'Section\x20Title'}
                            .value=${_0x1837e0[_0x5da5f6(0x2ce)]||''}
                            @value-changed=${_0x31037c=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_open_only':{..._0x1837e0,'zone_section_title':_0x31037c[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>

                          <div class="toggle-row">
                            <span>Hide Section Icon</span>
                            <ha-switch
                              .checked=${_0x1837e0[_0x5da5f6(0x26e)]===!![]}
                              @change=${_0x305ff8=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_open_only':{..._0x1837e0,'hide_zone_section_icon':_0x305ff8[_0x5da5f6(0x206)]['checked']}})}></ha-switch>
                          </div>

                          <div class="toggle-row">
                            <span>Hide Section Title</span>
                            <ha-switch
                              .checked=${_0x1837e0['hide_zone_section_name']===!![]}
                              @change=${_0x574062=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_open_only':{..._0x1837e0,'hide_zone_section_name':_0x574062['target'][_0x5da5f6(0x2af)]}})}></ha-switch>
                          </div>

                          <div class="toggle-row">
                            <span>Show Zone Numbers</span>
                            <ha-switch
                              .checked=${_0x1837e0[_0x5da5f6(0x212)]!==![]}
                              @change=${_0x1eaa91=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_open_only':{..._0x1837e0,'show_zone_numbers':_0x1eaa91['target'][_0x5da5f6(0x2af)]}})}></ha-switch>
                          </div>

                          <div class="toggle-row">
                            <span>Show Zone Names</span>
                            <ha-switch
                              .checked=${_0x1837e0[_0x5da5f6(0x24d)]!==![]}
                              @change=${_0x32ef11=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_open_only':{..._0x1837e0,'show_zone_name':_0x32ef11[_0x5da5f6(0x206)][_0x5da5f6(0x2af)]}})}></ha-switch>
                          </div>

                          <div class="color-row">
                            <span>Open Zone Color</span>
                            <input
                              class="color-input"
                              type="color"
                              .value=${_0x5af6f5}
                              @input=${_0x4f4a99=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_open_only':{..._0x1837e0,'color':_0x4f4a99['target'][_0x5da5f6(0x29f)]}})} />
                          </div>
                        </div>
                      `:''}
                </div>
              `:''}
          ${_0x9ed74a['zone_view']===_0x5da5f6(0x275)?_0x1fd840`
                <div class="section">
                  <div
                    class="section-header"
                    @click=${()=>this[_0x5da5f6(0x332)]('View')}>
                    <span>📋 All Zones Mode Settings</span>
                    <ha-icon icon=${this['_openView']?_0x5da5f6(0x222):_0x5da5f6(0x1f6)}></ha-icon>
                  </div>
                  ${this[_0x5da5f6(0x255)]?_0x1fd840`
                        <div class="section-body">
                          <ha-selector
                            .hass=${this[_0x5da5f6(0x21a)]}
                            .selector=${{'text':{}}}
                            .label=${'Section\x20Title'}
                            .value=${_0x1e2925[_0x5da5f6(0x2ce)]||''}
                            @value-changed=${_0x5b48d5=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_all_zones':{..._0x1e2925,'zone_section_title':_0x5b48d5[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>

                          <div class="toggle-row">
                            <span>Hide Section Icon</span>
                            <ha-switch
                              .checked=${_0x1e2925[_0x5da5f6(0x26e)]===!![]}
                              @change=${_0x2e496c=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_all_zones':{..._0x1e2925,'hide_zone_section_icon':_0x2e496c[_0x5da5f6(0x206)][_0x5da5f6(0x2af)]}})}></ha-switch>
                          </div>

                          <div class="toggle-row">
                            <span>Hide Section Title</span>
                            <ha-switch
                              .checked=${_0x1e2925[_0x5da5f6(0x328)]===!![]}
                              @change=${_0x3eb777=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_all_zones':{..._0x1e2925,'hide_zone_section_name':_0x3eb777[_0x5da5f6(0x206)][_0x5da5f6(0x2af)]}})}></ha-switch>
                          </div>

                          <div class="toggle-row">
                            <span>Show Zone Numbers</span>
                            <ha-switch
                              .checked=${_0x1e2925[_0x5da5f6(0x212)]!==![]}
                              @change=${_0x557285=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_all_zones':{..._0x1e2925,'show_zone_numbers':_0x557285[_0x5da5f6(0x206)]['checked']}})}></ha-switch>
                          </div>

                          <div class="toggle-row">
                            <span>Show Zone Names</span>
                            <ha-switch
                              .checked=${_0x1e2925[_0x5da5f6(0x24d)]!==![]}
                              @change=${_0x26a868=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_all_zones':{..._0x1e2925,'show_zone_name':_0x26a868[_0x5da5f6(0x206)]['checked']}})}></ha-switch>
                          </div>

                          <div class="color-row">
                            <span>ON Color</span>
                            <input
                              class="color-input"
                              type="color"
                              .value=${_0x3f2007}
                              @input=${_0x334c85=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_all_zones':{..._0x1e2925,'color_on':_0x334c85[_0x5da5f6(0x206)]['value']}})} />
                          </div>

                          <div class="color-row">
                            <span>OFF Color</span>
                            <input
                              class="color-input"
                              type="color"
                              .value=${_0x4e8d92}
                              @input=${_0x363048=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_all_zones':{..._0x1e2925,'color_off':_0x363048[_0x5da5f6(0x206)][_0x5da5f6(0x29f)]}})} />
                          </div>

                          <div class="color-row">
                            <span>ON Text Color</span>
                            <input
                              class="color-input"
                              type="color"
                              .value=${_0x1e5b5c}
                              @input=${_0x40611b=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_all_zones':{..._0x1e2925,'text_color_on':_0x40611b[_0x5da5f6(0x206)][_0x5da5f6(0x29f)]}})} />
                          </div>

                          <div class="color-row">
                            <span>OFF Text Color</span>
                            <input
                              class="color-input"
                              type="color"
                              .value=${_0x43706e}
                              @input=${_0x14cac0=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'view_all_zones':{..._0x1e2925,'text_color_off':_0x14cac0[_0x5da5f6(0x206)][_0x5da5f6(0x29f)]}})} />
                          </div>

                          <ha-selector
                            .hass=${this[_0x5da5f6(0x21a)]}
                            .selector=${{'select':{'mode':_0x5da5f6(0x338),'options':[{'value':_0x5da5f6(0x1fc),'label':_0x5da5f6(0x280)},{'value':_0x5da5f6(0x35a),'label':_0x5da5f6(0x1b8)}]}}}
                            .label=${_0x5da5f6(0x2df)}
                            .value=${_0x1e2925['show_on']||_0x5da5f6(0x1fc)}
                            @value-changed=${_0x582368=>this['_updateConfig']({..._0x9ed74a,'view_all_zones':{..._0x1e2925,'show_on':_0x582368[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>
                        </div>
                      `:''}
                </div>
              `:''}

          <div class="section">
            <div
              class="section-header"
              @click=${()=>this[_0x5da5f6(0x332)]('Colors')}>
              <span>🎨 Colors</span>
              <ha-icon icon=${this['_openColors']?_0x5da5f6(0x222):_0x5da5f6(0x1f6)}></ha-icon>
            </div>
            ${this['_openColors']?_0x1fd840`
                  <div class="section-body">
                    <div class="grid-3">
                      <div class="color-row">
                        <span>Disarm (Active)</span>
                        <input
                          class="color-input"
                          type="color"
                          .value=${_0xb9c39a}
                          @input=${_0x29cb42=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'colors':{..._0x22116f,'disarm_active':_0x29cb42[_0x5da5f6(0x206)][_0x5da5f6(0x29f)]}})} />
                      </div>

                      <div class="color-row">
                        <span>Disarm (Inactive)</span>
                        <input
                          class="color-input"
                          type="color"
                          .value=${_0x12a8e3}
                          @input=${_0x1dbe30=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'colors':{..._0x22116f,'disarm_inactive':_0x1dbe30[_0x5da5f6(0x206)][_0x5da5f6(0x29f)]}})} />
                      </div>

                      <div class="color-row">
                        <span>Arming</span>
                        <input
                          class="color-input"
                          type="color"
                          .value=${_0x25a8d1}
                          @input=${_0xc81ecc=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'colors':{..._0x22116f,'arming':_0xc81ecc[_0x5da5f6(0x206)][_0x5da5f6(0x29f)]}})} />
                      </div>

                      <div class="color-row">
                        <span>Disarming</span>
                        <input
                          class="color-input"
                          type="color"
                          .value=${_0x5d49ec}
                          @input=${_0x563ce5=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'colors':{..._0x22116f,'disarming':_0x563ce5['target'][_0x5da5f6(0x29f)]}})} />
                      </div>

                      <div class="color-row">
                        <span>Armed Away</span>
                        <input
                          class="color-input"
                          type="color"
                          .value=${_0x6bcf43}
                          @input=${_0x204017=>this['_updateConfig']({..._0x9ed74a,'colors':{..._0x22116f,'armed_away':_0x204017['target'][_0x5da5f6(0x29f)]}})} />
                      </div>

                      <div class="color-row">
                        <span>Armed Stay</span>
                        <input
                          class="color-input"
                          type="color"
                          .value=${_0x324d1a}
                          @input=${_0x4aaeb8=>this['_updateConfig']({..._0x9ed74a,'colors':{..._0x22116f,'armed_stay':_0x4aaeb8[_0x5da5f6(0x206)][_0x5da5f6(0x29f)]}})} />
                      </div>

                      <div class="color-row">
                        <span>Armed Night</span>
                        <input
                          class="color-input"
                          type="color"
                          .value=${_0x1a9ce7}
                          @input=${_0x5949fd=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'colors':{..._0x22116f,'armed_night':_0x5949fd['target'][_0x5da5f6(0x29f)]}})} />
                      </div>

                      <div class="color-row">
                        <span>Armed Vacation</span>
                        <input
                          class="color-input"
                          type="color"
                          .value=${_0x3d50c5}
                          @input=${_0x4c6199=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'colors':{..._0x22116f,'armed_vacation':_0x4c6199['target']['value']}})} />
                      </div>

                      <div class="color-row">
                        <span>Armed Bypass</span>
                        <input
                          class="color-input"
                          type="color"
                          .value=${_0x13dd8f}
                          @input=${_0x490aa9=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'colors':{..._0x22116f,'armed_custom_bypass':_0x490aa9[_0x5da5f6(0x206)]['value']}})} />
                      </div>

                      <div class="color-row">
                        <span>Pending</span>
                        <input
                          class="color-input"
                          type="color"
                          .value=${_0x2ab10d}
                          @input=${_0x45530e=>this['_updateConfig']({..._0x9ed74a,'colors':{..._0x22116f,'pending':_0x45530e[_0x5da5f6(0x206)][_0x5da5f6(0x29f)]}})} />
                      </div>

                      <div class="color-row">
                        <span>Triggered</span>
                        <input
                          class="color-input"
                          type="color"
                          .value=${_0x59bfa2}
                          @input=${_0x40bc4c=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'colors':{..._0x22116f,'triggered':_0x40bc4c[_0x5da5f6(0x206)][_0x5da5f6(0x29f)]}})} />
                      </div>
                    </div>
                  </div>
                `:''}
          </div>

          <div class="section">
            <div
              class="section-header"
              @click=${()=>this[_0x5da5f6(0x332)]('NameMapping')}>
              <span>🏷️ Custom Labels for Status</span>
              <ha-icon icon=${this[_0x5da5f6(0x1e2)]?_0x5da5f6(0x222):_0x5da5f6(0x1f6)}></ha-icon>
            </div>
            ${this[_0x5da5f6(0x1e2)]?_0x1fd840`
                  <div class="section-body">
                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x35f)}
                      .value=${_0x1c7b30[_0x5da5f6(0x230)]||''}
                      @value-changed=${_0x370edf=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'name_mapping':{..._0x1c7b30,'disarm_button':_0x370edf[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>

                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x2ee)}
                      .value=${_0x1c7b30[_0x5da5f6(0x30d)]||''}
                      @value-changed=${_0x317897=>this['_updateConfig']({..._0x9ed74a,'name_mapping':{..._0x1c7b30,'arming':_0x317897[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>

                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${'Disarming'}
                      .value=${_0x1c7b30[_0x5da5f6(0x34a)]||''}
                      @value-changed=${_0x37978d=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'name_mapping':{..._0x1c7b30,'disarming':_0x37978d[_0x5da5f6(0x268)]['value']}})}></ha-selector>

                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x24e)}
                      .value=${_0x1c7b30[_0x5da5f6(0x32e)]||''}
                      @value-changed=${_0x134bdf=>this['_updateConfig']({..._0x9ed74a,'name_mapping':{..._0x1c7b30,'disarmed':_0x134bdf[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>

                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x1ca)}
                      .value=${_0x1c7b30[_0x5da5f6(0x348)]||''}
                      @value-changed=${_0x2a49b4=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'name_mapping':{..._0x1c7b30,'armed_away':_0x2a49b4[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>

                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x21b)}
                      .value=${_0x1c7b30[_0x5da5f6(0x20b)]||''}
                      @value-changed=${_0x2e940b=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'name_mapping':{..._0x1c7b30,'armed_stay':_0x2e940b[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>

                    <ha-selector
                      .hass=${this['hass']}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x233)}
                      .value=${_0x1c7b30[_0x5da5f6(0x252)]||''}
                      @value-changed=${_0x47fdeb=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'name_mapping':{..._0x1c7b30,'armed_night':_0x47fdeb[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>

                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x23d)}
                      .value=${_0x1c7b30[_0x5da5f6(0x1c2)]||''}
                      @value-changed=${_0x555e3d=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'name_mapping':{..._0x1c7b30,'armed_vacation':_0x555e3d[_0x5da5f6(0x268)]['value']}})}></ha-selector>

                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${'Armed\x20Bypass'}
                      .value=${_0x1c7b30[_0x5da5f6(0x35e)]||''}
                      @value-changed=${_0x274cd8=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'name_mapping':{..._0x1c7b30,'armed_custom_bypass':_0x274cd8[_0x5da5f6(0x268)]['value']}})}></ha-selector>

                    <ha-selector
                      .hass=${this['hass']}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x1c4)}
                      .value=${_0x1c7b30[_0x5da5f6(0x30e)]||''}
                      @value-changed=${_0x12c1e4=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'name_mapping':{..._0x1c7b30,'pending':_0x12c1e4[_0x5da5f6(0x268)]['value']}})}></ha-selector>

                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x34c)}
                      .value=${_0x1c7b30['triggered']||''}
                      @value-changed=${_0x39737e=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'name_mapping':{..._0x1c7b30,'triggered':_0x39737e[_0x5da5f6(0x268)]['value']}})}></ha-selector>
                  </div>
                `:''}
          </div>

          <div class="section">
            <div
              class="section-header"
              @click=${()=>this[_0x5da5f6(0x332)](_0x5da5f6(0x28b))}>
              <span>📝 History</span>
              <ha-icon icon=${this[_0x5da5f6(0x1b9)]?'mdi:chevron-up':'mdi:chevron-down'}></ha-icon>
            </div>
            ${this[_0x5da5f6(0x1b9)]?_0x1fd840`
                  <div class="section-body">
                    <ha-selector
                      .hass=${this['hass']}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x304)}
                      .value=${_0x4efaeb['history_section_title']||''}
                      @value-changed=${_0x508307=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'history':{..._0x4efaeb,'history_section_title':_0x508307[_0x5da5f6(0x268)]['value']}})}></ha-selector>

                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x23a)}
                      .value=${String(_0x4efaeb[_0x5da5f6(0x22c)]!=null?_0x4efaeb[_0x5da5f6(0x22c)]:0x4)}
                      @value-changed=${_0x396960=>{const _0x5dcc93=_0x5da5f6,_0xa4f0b5=Number(_0x396960['detail']['value']);!isNaN(_0xa4f0b5)&&this[_0x5dcc93(0x357)]({..._0x9ed74a,'history':{..._0x4efaeb,'max_items':_0xa4f0b5}});}}></ha-selector>

                     ${(_0x4efaeb['show_on']||_0x5da5f6(0x1fc))===_0x5da5f6(0x1fc)?_0x1fd840`
                           <ha-selector
                             .hass=${this[_0x5da5f6(0x21a)]}
                             .selector=${{'text':{}}}
                             .label=${_0x5da5f6(0x353)}
                             .value=${_0x4efaeb[_0x5da5f6(0x363)]!=null?String(_0x4efaeb[_0x5da5f6(0x363)]):''}
                             @value-changed=${_0x273b86=>{const _0x1aa7eb=_0x5da5f6,_0x32be88=_0x273b86[_0x1aa7eb(0x268)][_0x1aa7eb(0x29f)],_0x1679ab={..._0x4efaeb};if(_0x32be88==null||String(_0x32be88)[_0x1aa7eb(0x294)]()==='')delete _0x1679ab['list_height'];else/^\d+(\.\d+)?$/['test'](String(_0x32be88)['trim']())?_0x1679ab[_0x1aa7eb(0x363)]=Number(_0x32be88):_0x1679ab[_0x1aa7eb(0x363)]=_0x32be88;this['_updateConfig']({..._0x9ed74a,'history':_0x1679ab});}}></ha-selector>
                         `:''}

                     <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'select':{'mode':'dropdown','options':[{'value':_0x5da5f6(0x1fc),'label':'Bottom'},{'value':_0x5da5f6(0x35a),'label':_0x5da5f6(0x1b8)}]}}}
                      .label=${_0x5da5f6(0x2df)}
                      .value=${_0x4efaeb['show_on']||_0x5da5f6(0x1fc)}
                      @value-changed=${_0x42fccb=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'history':{..._0x4efaeb,'show_on':_0x42fccb[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>

                    <div class="toggle-row">
                      <span>Hide Activity History</span>
                      <ha-switch
                        .checked=${_0x4efaeb['hide_history']===!![]}
                        @change=${_0x5e5a71=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'history':{..._0x4efaeb,'hide_history':_0x5e5a71[_0x5da5f6(0x206)][_0x5da5f6(0x2af)]}})}></ha-switch>
                    </div>

                    <div class="toggle-row">
                      <span>Hide Icon</span>
                      <ha-switch
                        .checked=${_0x4efaeb['hide_history_section_icon']===!![]}
                        @change=${_0x55351d=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'history':{..._0x4efaeb,'hide_history_section_icon':_0x55351d[_0x5da5f6(0x206)][_0x5da5f6(0x2af)]}})}></ha-switch>
                    </div>

                    <div class="toggle-row">
                      <span>Hide Title Text</span>
                      <ha-switch
                        .checked=${_0x4efaeb[_0x5da5f6(0x2a3)]===!![]}
                        @change=${_0x5b4605=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'history':{..._0x4efaeb,'hide_history_section_name':_0x5b4605[_0x5da5f6(0x206)][_0x5da5f6(0x2af)]}})}></ha-switch>
                    </div>
                  </div>
                `:''}
          </div>

          <div class="section">
            <div
              class="section-header"
              @click=${()=>this[_0x5da5f6(0x332)](_0x5da5f6(0x2d5))}>
              <span>🤖 Automations</span>
              <ha-icon icon=${this[_0x5da5f6(0x2cc)]?_0x5da5f6(0x222):_0x5da5f6(0x1f6)}></ha-icon>
            </div>
            ${this[_0x5da5f6(0x2cc)]?_0x1fd840`
                  <div class="section-body">
                    <ha-selector
                      .hass=${this[_0x5da5f6(0x21a)]}
                      .selector=${{'text':{}}}
                      .label=${_0x5da5f6(0x304)}
                      .value=${_0x16bd46[_0x5da5f6(0x350)]||''}
                      @value-changed=${_0x265e7f=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'automations':{..._0x16bd46,'automation_section_title':_0x265e7f[_0x5da5f6(0x268)][_0x5da5f6(0x29f)]}})}></ha-selector>

                    <div class="toggle-row">
                      <span>Hide Automations</span>
                      <ha-switch
                        .checked=${_0x16bd46[_0x5da5f6(0x2dc)]===!![]}
                        @change=${_0x1a3ceb=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'automations':{..._0x16bd46,'hide_automations':_0x1a3ceb['target'][_0x5da5f6(0x2af)]}})}></ha-switch>
                    </div>

                    <div class="toggle-row">
                      <span>Hide Icon</span>
                      <ha-switch
                        .checked=${_0x16bd46[_0x5da5f6(0x219)]===!![]}
                        @change=${_0x91f1ee=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'automations':{..._0x16bd46,'hide_automation_section_icon':_0x91f1ee['target'][_0x5da5f6(0x2af)]}})}></ha-switch>
                    </div>

                    <div class="toggle-row">
                      <span>Hide Title Text</span>
                      <ha-switch
                        .checked=${_0x16bd46[_0x5da5f6(0x2d3)]===!![]}
                        @change=${_0x275fa5=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'automations':{..._0x16bd46,'hide_automation_section_name':_0x275fa5[_0x5da5f6(0x206)]['checked']}})}></ha-switch>
                    </div>

                    <div class="toggle-row">
                      <span>Hide Last Triggered</span>
                      <ha-switch
                        .checked=${_0x16bd46[_0x5da5f6(0x2ba)]===!![]}
                        @change=${_0x5a262d=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'automations':{..._0x16bd46,'hide_last_triggered':_0x5a262d[_0x5da5f6(0x206)][_0x5da5f6(0x2af)]}})}></ha-switch>
                    </div>

                    <div class="color-row">
                      <span>Toggle Color</span>
                      <input
                        class="color-input"
                        type="color"
                        .value=${_0x559ee5}
                        @input=${_0xcc7e61=>this[_0x5da5f6(0x357)]({..._0x9ed74a,'automations':{..._0x16bd46,'automation_toggle_color':_0xcc7e61['target'][_0x5da5f6(0x29f)]}})} />
                    </div>

                    ${(_0x16bd46[_0x5da5f6(0x327)]||[])[_0x5da5f6(0x341)]((_0x9a25ae,_0x5efa60)=>_0x1fd840`
                        <div class="sub-item">
                          <div class="sub-item-header">
                            <span>Automation ${_0x5efa60+0x1}</span>
                            <button
                              class="automation-remove-btn"
                              title="Remove Automation"
                              @click=${()=>this[_0x5da5f6(0x1fa)](_0x5efa60)}>
                              ×
                            </button>
                          </div>
                          <ha-selector
                            .hass=${this[_0x5da5f6(0x21a)]}
                            .selector=${{'entity':{'domain':['automation',_0x5da5f6(0x2c2)]}}}
                            .value=${_0x9a25ae}
                            @value-changed=${_0x13604a=>{const _0x3d6bf1=_0x5da5f6,_0x111f59=[..._0x16bd46['automation_list']||[]];_0x111f59[_0x5efa60]=_0x13604a[_0x3d6bf1(0x268)][_0x3d6bf1(0x29f)],this['_updateConfig']({..._0x9ed74a,'automations':{..._0x16bd46,'automation_list':_0x111f59}});}}></ha-selector>
                        </div>
                      `)}

                    <mwc-button
                      raised
                      @click=${this[_0x5da5f6(0x26f)]}>
                      <ha-icon icon="mdi:plus"></ha-icon>
                      Add Automation
                    </mwc-button>
                  </div>
                `:''}
          </div>
        </div>
      `;}static get[_0x3ca4b6(0x2d0)](){return _0x470ab4`
        :host {
          /* HA 2026.x — new form background token used by .input::part(base) */
          --ha-color-form-background: transparent;
          --ha-color-form-background-disabled: transparent;
        }
        ha-select, ha-selector, ha-textfield {
          width: 100%;
          display: block;
          --mdc-menu-max-height: 200px;
          /* Legacy MWC textfield/select (HA <= 2025.x) */
          --mdc-text-field-fill-color: transparent;
          --mdc-text-field-disabled-fill-color: transparent;
          --mdc-text-field-idle-line-color: var(--divider-color);
          --mdc-text-field-hover-line-color: var(--primary-text-color);
          --mdc-select-fill-color: transparent;
          --mdc-select-disabled-fill-color: transparent;
          --mdc-select-idle-line-color: var(--divider-color);
          --mdc-select-hover-line-color: var(--primary-text-color);
          /* Material 3 (HA 2026.x) */
          --md-filled-field-container-color: transparent;
          --md-filled-text-field-container-color: transparent;
          --md-filled-select-text-field-container-color: transparent;
          --md-filled-field-disabled-container-color: transparent;
          --md-filled-field-hover-state-layer-color: transparent;
          --md-filled-field-focus-state-layer-color: transparent;
        }
        .automation-remove-btn { border: none; border-radius: 999px; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; padding: 0; font-size: 16px; line-height: 1; cursor: pointer; background: var(--secondary-background-color); color: var(--text-primary-color, #fff); }
        .card-config { padding: 8px 0; }
        .color-input { width: 60px; height: 28px; padding: 0; border: none; background: transparent; cursor: pointer; }
        .color-row { display: flex; justify-content: space-between; align-items: center; padding: 4px 0 12px 0; gap: 8px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 12px; margin-bottom: 8px; }
        .grid-3 { display: grid; grid-template-columns: 1fr 1fr; margin-top: 12px; column-gap: 60px; margin-bottom: 8px; }
        .label { margin: 8px 0 4px 0; font-size: 0.9em; color: var(--secondary-text-color); }
        .section { margin-bottom: 12px; border: 1px solid var(--divider-color); border-radius: 8px; overflow: visible; background: var(--card-background-color); }
        .section-body { padding: 16px; position: relative; overflow: visible; }
        .section-header { padding: 12px 16px; background: var(--secondary-background-color); display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: 500; }
        .sub-item { border: 1px solid var(--divider-color); padding: 12px; border-radius: 8px; margin-bottom: 12px; background: var(--secondary-background-color); }
        .sub-item-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .toggle-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; }
        .zone-remove-btn { border: none; border-radius: 999px; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; padding: 0; font-size: 16px; line-height: 1; cursor: pointer; background: var(--secondary-background-color); color: var(--text-primary-color, #fff); }
        .zone-remove-btn:hover { filter: brightness(0.9); }
        mwc-button { width: 100%; margin-top: 8px; }
      `;}}!customElements[_0x3ca4b6(0x1d8)](_0x3ca4b6(0x254))&&customElements[_0x3ca4b6(0x211)](_0x3ca4b6(0x254),_0x3b9d75),!customElements[_0x3ca4b6(0x1d8)](_0x3ca4b6(0x1ed))&&customElements['define'](_0x3ca4b6(0x1ed),_0x50a1b4),(window[_0x3ca4b6(0x2ad)]=window[_0x3ca4b6(0x2ad)]||[])['push']({'type':_0x3ca4b6(0x1ed),'name':_0x3ca4b6(0x29d),'description':_0x3ca4b6(0x33c)});})()));function _0x3108(_0x382408,_0xc86f57){_0x382408=_0x382408-0x1b6;const _0x487219=_0x4872();let _0x310821=_0x487219[_0x382408];return _0x310821;}function _0x4872(){const _0xb6392b=['alarm_control_panel.alarm_home_alarm','_setupStateChangedSubscription','#008000','locked','armed_away','render','disarming','GET','Triggered','occupancy','red','strong','automation_section_title','Zone\x20View\x20Mode','Disarm','List\x20Height\x20(Bottom\x20only,\x20e.g.\x20280px)','away','hide_history','_countdownValue','_updateConfig','off','Zones','right','object',',\x201fr);','Title','armed_custom_bypass','Disarm\x20Button','moisture','state','connection','list_height','Armed\x20(Vacation)','zone_view','Right\x20Side','_openHistory','_openKeypad','locale','alarm-and-security-card:\x20initial\x20history\x20error','filter','isArray','isClosed','opening','renderRoot','armed_vacation','mode','Pending','lastTriggered','title','Name','keypad-button','#000000','Armed\x20Away','arm_night','colors','_mapStateLabel','repeat','px;','night','Downstairs','_layoutObserved','105px','split','toString','Stay','device_id','get','index','disarm_inactive','height:','getConfigElement','lock','72AZaukF','soft','blue','includes','_openNameMapping','attributes','smoke','alarm_arm_away','orange','Alarm\x20Triggered','number','catch','boolean','grey','name','alarm-and-security-card','old_state','alarm_control_panel.','#ff0000','arm_home','Detected','code_disarm_required','callService','background-color:','mdi:chevron-down','background:','formatEntityState','_sideMaxHeightPx','_removeAutomation','8PXuwaH','bottom','icon','ha-panel-lovelace','history_section_title','arm','color','hide_history_section_icon','_scheduleRecalc','last_updated','automation_toggle_color','target','5836006DAsRHb','zones','automations','history','armed_stay','safe','padStart','binary_sensor.alarm_zone_8','custom_bypass','Entity\x20could\x20not\x20be\x20toggled.\x20See\x20console\x20for\x20details.','define','show_zone_numbers','error','open_only','arm_','hass-more-info','binary_sensor.alarm_zone_6','_historyError','hide_automation_section_icon','hass','Armed\x20Stay','_hass','garage_door','?filter_entity_id=','_lastAlarmState','problem','toLowerCase','mdi:chevron-up','_historyEntries','callApi','Main\x20Door','join','_name','_formatTime','Home','startsWith','firstUpdated','max_items','buttons','binary_sensor.alarm_zone_3','3D\x20Style','disarm_button','#00008b','_getZoneDisplayLabel','Armed\x20Night','now','toISOString','time','label','zone-slot\x20zone-slot-open','last_changed','Max\x20Items','_setupLayoutObservers','warn','Armed\x20Vacation','_computeZones','Enter\x20Code\x20and\x20Disarm','splice','body-main','Arming\x20Soon','Gas','alarm_arm_custom_bypass','Soft\x20Raised','Btn\x20','#006400','_unsubStateChanged','moving','Strong\x20Raised','var(--error-color)','Armed\x20(Home)','show_zone_name','Disarmed','mwc-menu','_getDisarmLabel','Global','armed_night','Opened','alarm-and-security-card-editor','_openView','corner','updated','code_arm_required','hours_to_show','armed_home','some','zones_view','shadowRoot','auto','services','arm_away','70FtJPqT','px;\x20overflow:hidden;','_busy','_loadInitialHistory','width:','string','name_mapping','detail','alarm_arm_vacation','_removeZone','Armed\x20(Bypass)','binary_sensor.','sort','hide_zone_section_icon','_addAutomation','mdi:shield-home','_countdownTimer','Motion','values','getBoundingClientRect','all_zones','text_color_off','setConfig','language','border:1px\x20solid\x20','states','.body-side','Clear','vibration','action_button_2','unlocked','Bottom','_localizeStateRaw','max-height:','2-digit','Closed','config-changed','length','_normalizeMode','grid-template-columns:\x20repeat(','heat','_open','History','getPrototypeOf','Width\x20(%)','assign','turn_off','binary_sensor.alarm_zone_4','test','44hfHraF','.code-section','trim','_openZones','_getStateColor','_layoutRAF','detected','effect_variant','disconnect','var(--text-primary-color,\x20#fff)','_toggleEntity','Alarm\x20and\x20Security\x20Card','center','value','state.binary_sensor.default.','find','#ffa500','hide_history_section_name','keypad_width','_handleCountdown','Armed\x20(Night)','board_zone','turn_on','action_button_','then','disarm_active','_code','customCards','color_off','checked','_getDisarmColor','_addZone','show_on','_handleAction',';color:var(--text-primary-color,#fff);','%;margin:0\x20auto;','triggered','Show\x20All\x20Zones','disarm','An\x20error\x20occurred\x20while\x20processing\x20the\x20request.\x20See\x20console\x20for\x20details.','hide_last_triggered','round','observe','light','arm_custom_bypass','&minimal_response','Arm\x20Night','Hide','input_boolean','Upstairs','_initialHistoryLoaded','keypad','alarm-and-security-card:\x20entity\x20toggle\x20error','\x20Name','forEach','unknown','border:none;','Disarming','_openAutomations','Open\x20Zones\x20Only','zone_section_title','System','styles','requestUpdate','color:','hide_automation_section_name','history/period/','Automations','hide_keypad_and_show_as_icon','view_open_only','alarmo','entity_id','330876NymSOf','dispatchEvent','hide_automations','#cccccc','isOn','Placement','getTime','_formatHistoryState','height','223153EUkbzG','renderZones','default_zone_view','alarm-and-security-card:\x20Base\x20LitElement\x20class\x20not\x20found.\x20The\x20card\x20must\x20run\x20inside\x20Home\x20Assistant.','keys','push','function','_layoutRO','delay','view_all_zones','friendly_name','Arming','green','Height\x20(px)','_lastDelay','code','1787200QobnCj','slice','Away','alarm-and-security-card:\x20Unsupported\x20mode\x20for\x20Alarmo','localize','Fire','zone-slot\x20zone-slot-empty','keypad_height','#808080','_needsCodeForAction','fixed','_getStateObjFrom','floor','prototype','_appendHistoryFromState','_handleKeypadPress','disconnectedCallback','Section\x20Title','arm_vacation','_toggleAutomation','parse','29435UlebXD','#0000ff','entity','alarm_control_panel','_isArmedLike','arming','pending','isOpen','_getStateObj','_openDevicePopup','color_on','text_color_on','_config','\x20Action','false','power','component.binary_sensor.entity_component._.state.','last_triggered','show_keypad_borders','7502274dcjIFj','querySelector','#00ff00','arm_stay','binary_sensor.alarm_zone_1','_message','alarm_disarm','message','binary_sensor.alarm_zone_2','abs','data','properties','automation_list','hide_zone_section_name','inactive','258651yQmqpb','Enter\x20code\x20to\x20arm.','enable_3d_effects','finally','disarmed','keypad_border_color','stringify','closed','_toggleSection','home','device_class','html','open','_openGlobal','dropdown','darkgreen','code_format','inset','Alarm\x20keypad\x20with\x20live\x20activity\x20stream\x20from\x20state_changed\x20events,\x20initial\x20history\x20load\x20from\x20last\x20hours,\x20customizable\x20colors/names,\x20zone\x20view,\x20and\x20automations.','automation.device_home_alarm','Zone\x20No','Activity','_handleBackspace','map','lock.','Off'];_0x4872=function(){return _0xb6392b;};return _0x4872();}
