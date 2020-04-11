module.exports = {
  name: "WiT32 More",
  index: 15,
  color: "230",
  icon: "/static/icons/SVG/c11.svg",
  blocks: [
    // {
    //   xml:
    //     `<block type="io_setpin">
    //                     <value name="pin">
    //                         <shadow type="math_number">
    //                             <field name="NUM">25</field>
    //                         </shadow>
    //                     </value>
    //                 </block>`
    // },
	{
      xml: `<sep gap="32"></sep><label text="USB Out" web-class="headline"></label>`
    },
	"usb_out_on",
	"usb_out_off",
	
	{
      xml: `<sep gap="32"></sep><label text="Blynk IoT" web-class="headline"></label>`
    },
	"blynk_iot_setup_code",
	"blynk_iot_run",
	{
      xml: `<sep gap="32"></sep><label text="HTTP Web" web-class="headline"></label>`
    },
	"http_post_data",
	"http_get_data",
	{
      xml: `<sep gap="32"></sep><label text="PMS Dust Sensor" web-class="headline"></label>`
    },
	"pms_dust_setup",
	"pms_dust_read",
	"pms_dust_read_pm10",
	"pms_dust_read_pm25",
	"pms_dust_read_pm100",
	{
      xml: `<sep gap="32"></sep><label text="Arduino" web-class="headline"></label>`
    },
	"arduino_default_include_file",
	"arduino_include_file",
	"arduino_global_var",
	"arduino_custom_code",
	"arduino_custom_return_float",
	"arduino_custom_return_int",
	{ 
                    xml : 
                    `<block type="io_map_value">
                        <value name="number">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y1">
                            <shadow type="math_number">
                                <field name="NUM">1023</field>
                            </shadow>
                        </value>
						<value name="x2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y2">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                    </block>`
    }
    
  ]
};
