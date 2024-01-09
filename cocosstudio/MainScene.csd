<GameFile>
  <PropertyGroup Name="MainScene" Type="Scene" ID="a2ee0952-26b5-49ae-8bf9-4f1d6279b798" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Scene" ctype="GameNodeObjectData">
        <Size X="960.0000" Y="640.0000" />
        <Children>
          <AbstractNodeData Name="Default" ActionTag="953446860" Tag="5" IconVisible="False" ctype="SpriteObjectData">
            <Size X="960.0000" Y="640.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="480.0000" Y="320.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.0000" Y="1.0000" />
            <FileData Type="Normal" Path="HelloWorld.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="main" ActionTag="1018286893" Tag="3" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="960.0000" Y="640.0000" />
            <Children>
              <AbstractNodeData Name="bg" ActionTag="-549621885" Tag="4" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="379.2000" RightMargin="379.2000" TopMargin="153.6000" BottomMargin="153.6000" Scale9Enable="True" LeftEage="33" RightEage="33" TopEage="33" BottomEage="33" Scale9OriginX="33" Scale9OriginY="33" Scale9Width="34" Scale9Height="34" ctype="ImageViewObjectData">
                <Size X="201.6000" Y="332.8000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="480.0000" Y="320.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.2100" Y="0.5200" />
                <FileData Type="Normal" Path="kenney_ui-pack/PNG/grey_panel.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="Center" ActionTag="2102136657" Tag="8" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="384.0000" RightMargin="384.0000" TopMargin="160.0000" BottomMargin="160.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="192.0000" Y="320.0000" />
                <Children>
                  <AbstractNodeData Name="menuList" ActionTag="911986798" Tag="6" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ScrollDirectionType="0" DirectionType="Vertical" HorizontalType="Align_HorizontalCenter" ctype="ListViewObjectData">
                    <Size X="192.0000" Y="320.0000" />
                    <Children>
                      <AbstractNodeData Name="item0" ActionTag="-278316199" Tag="12" IconVisible="False" LeftMargin="0.0000" RightMargin="0.0000" BottomMargin="256.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                        <Size X="192.0000" Y="64.0000" />
                        <Children>
                          <AbstractNodeData Name="bg" CanEdit="False" Visible="False" ActionTag="-174034655" VisibleForFrame="False" Tag="13" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="73.0000" RightMargin="73.0000" TopMargin="9.0000" BottomMargin="9.0000" Scale9Width="46" Scale9Height="46" ctype="ImageViewObjectData">
                            <Size X="46.0000" Y="46.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="96.0000" Y="32.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.2396" Y="0.7188" />
                            <FileData Type="Default" Path="Default/ImageFile.png" Plist="" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="but" ActionTag="2065831186" Tag="14" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="38.4000" RightMargin="38.4000" TopMargin="14.0000" BottomMargin="14.0000" TouchEnable="True" FontSize="14" ButtonText="创建" Scale9Width="190" Scale9Height="49" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                            <Size X="115.2000" Y="36.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="96.0000" Y="32.0000" />
                            <Scale ScaleX="1.5000" ScaleY="1.5000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.6000" Y="0.5625" />
                            <TextColor A="255" R="65" G="65" B="70" />
                            <DisabledFileData Type="Normal" Path="kenney_ui-pack/PNG/red_button10.png" Plist="" />
                            <PressedFileData Type="Normal" Path="kenney_ui-pack/PNG/yellow_button01.png" Plist="" />
                            <NormalFileData Type="Normal" Path="kenney_ui-pack/PNG/yellow_button00.png" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="96.0000" Y="288.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.9000" />
                        <PreSize X="1.0000" Y="0.2000" />
                        <SingleColor A="255" R="150" G="200" B="255" />
                        <FirstColor A="255" R="150" G="200" B="255" />
                        <EndColor A="255" R="255" G="255" B="255" />
                        <ColorVector ScaleY="1.0000" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="item1" ActionTag="-581829295" ZOrder="1" Tag="15" IconVisible="False" LeftMargin="0.0000" RightMargin="0.0000" TopMargin="64.0000" BottomMargin="192.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                        <Size X="192.0000" Y="64.0000" />
                        <Children>
                          <AbstractNodeData Name="bg" CanEdit="False" Visible="False" ActionTag="-859852102" VisibleForFrame="False" Tag="16" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="73.0000" RightMargin="73.0000" TopMargin="9.0000" BottomMargin="9.0000" Scale9Width="46" Scale9Height="46" ctype="ImageViewObjectData">
                            <Size X="46.0000" Y="46.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="96.0000" Y="32.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.2396" Y="0.7188" />
                            <FileData Type="Default" Path="Default/ImageFile.png" Plist="" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="but" ActionTag="-664313749" Tag="17" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="38.4000" RightMargin="38.4000" TopMargin="14.0000" BottomMargin="14.0000" TouchEnable="True" FontSize="14" ButtonText="读取" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="160" Scale9Height="27" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                            <Size X="115.2000" Y="36.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="96.0000" Y="32.0000" />
                            <Scale ScaleX="1.5000" ScaleY="1.5000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.6000" Y="0.5625" />
                            <TextColor A="255" R="65" G="65" B="70" />
                            <DisabledFileData Type="Normal" Path="kenney_ui-pack/PNG/red_button10.png" Plist="" />
                            <PressedFileData Type="Normal" Path="kenney_ui-pack/PNG/blue_button01.png" Plist="" />
                            <NormalFileData Type="Normal" Path="kenney_ui-pack/PNG/blue_button00.png" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="96.0000" Y="224.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.7000" />
                        <PreSize X="1.0000" Y="0.2000" />
                        <SingleColor A="255" R="150" G="200" B="255" />
                        <FirstColor A="255" R="150" G="200" B="255" />
                        <EndColor A="255" R="255" G="255" B="255" />
                        <ColorVector ScaleY="1.0000" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="item2" ActionTag="-1003045697" ZOrder="2" Tag="18" IconVisible="False" LeftMargin="0.0000" RightMargin="0.0000" TopMargin="128.0000" BottomMargin="128.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                        <Size X="192.0000" Y="64.0000" />
                        <Children>
                          <AbstractNodeData Name="bg" CanEdit="False" Visible="False" ActionTag="-11272900" VisibleForFrame="False" Tag="19" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="73.0000" RightMargin="73.0000" TopMargin="9.0000" BottomMargin="9.0000" Scale9Width="46" Scale9Height="46" ctype="ImageViewObjectData">
                            <Size X="46.0000" Y="46.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="96.0000" Y="32.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.2396" Y="0.7188" />
                            <FileData Type="Default" Path="Default/ImageFile.png" Plist="" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="but" ActionTag="1512322658" Tag="20" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="38.4000" RightMargin="38.4000" TopMargin="14.0000" BottomMargin="14.0000" TouchEnable="True" FontSize="14" ButtonText="Button" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="16" Scale9Height="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                            <Size X="115.2000" Y="36.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="96.0000" Y="32.0000" />
                            <Scale ScaleX="1.5000" ScaleY="1.5000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.6000" Y="0.5625" />
                            <TextColor A="255" R="65" G="65" B="70" />
                            <DisabledFileData Type="Default" Path="Default/Button_Disable.png" Plist="" />
                            <PressedFileData Type="Default" Path="Default/Button_Press.png" Plist="" />
                            <NormalFileData Type="Default" Path="Default/Button_Normal.png" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="96.0000" Y="160.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="1.0000" Y="0.2000" />
                        <SingleColor A="255" R="150" G="200" B="255" />
                        <FirstColor A="255" R="150" G="200" B="255" />
                        <EndColor A="255" R="255" G="255" B="255" />
                        <ColorVector ScaleY="1.0000" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="item3" ActionTag="-380281823" ZOrder="3" Tag="21" IconVisible="False" LeftMargin="0.0000" RightMargin="0.0000" TopMargin="192.0000" BottomMargin="64.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                        <Size X="192.0000" Y="64.0000" />
                        <Children>
                          <AbstractNodeData Name="bg" CanEdit="False" Visible="False" ActionTag="-1995147959" VisibleForFrame="False" Tag="22" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="73.0000" RightMargin="73.0000" TopMargin="9.0000" BottomMargin="9.0000" Scale9Width="46" Scale9Height="46" ctype="ImageViewObjectData">
                            <Size X="46.0000" Y="46.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="96.0000" Y="32.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.2396" Y="0.7188" />
                            <FileData Type="Default" Path="Default/ImageFile.png" Plist="" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="but" ActionTag="1716384397" Tag="23" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="38.4000" RightMargin="38.4000" TopMargin="14.0000" BottomMargin="14.0000" TouchEnable="True" FontSize="14" ButtonText="Button" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="16" Scale9Height="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                            <Size X="115.2000" Y="36.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="96.0000" Y="32.0000" />
                            <Scale ScaleX="1.5000" ScaleY="1.5000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.6000" Y="0.5625" />
                            <TextColor A="255" R="65" G="65" B="70" />
                            <DisabledFileData Type="Default" Path="Default/Button_Disable.png" Plist="" />
                            <PressedFileData Type="Default" Path="Default/Button_Press.png" Plist="" />
                            <NormalFileData Type="Default" Path="Default/Button_Normal.png" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="96.0000" Y="96.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.3000" />
                        <PreSize X="1.0000" Y="0.2000" />
                        <SingleColor A="255" R="150" G="200" B="255" />
                        <FirstColor A="255" R="150" G="200" B="255" />
                        <EndColor A="255" R="255" G="255" B="255" />
                        <ColorVector ScaleY="1.0000" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="item4" ActionTag="1256766764" ZOrder="4" Tag="24" IconVisible="False" LeftMargin="0.0000" RightMargin="0.0000" TopMargin="256.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                        <Size X="192.0000" Y="64.0000" />
                        <Children>
                          <AbstractNodeData Name="bg" CanEdit="False" Visible="False" ActionTag="2131529022" VisibleForFrame="False" Tag="25" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="73.0000" RightMargin="73.0000" TopMargin="9.0000" BottomMargin="9.0000" Scale9Width="46" Scale9Height="46" ctype="ImageViewObjectData">
                            <Size X="46.0000" Y="46.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="96.0000" Y="32.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.2396" Y="0.7188" />
                            <FileData Type="Default" Path="Default/ImageFile.png" Plist="" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="but" ActionTag="994411" Tag="26" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="38.4000" RightMargin="38.4000" TopMargin="14.0000" BottomMargin="14.0000" TouchEnable="True" FontSize="14" ButtonText="退出" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="160" Scale9Height="27" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                            <Size X="115.2000" Y="36.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="96.0000" Y="32.0000" />
                            <Scale ScaleX="1.5000" ScaleY="1.5000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.6000" Y="0.5625" />
                            <TextColor A="255" R="65" G="65" B="70" />
                            <DisabledFileData Type="Normal" Path="kenney_ui-pack/PNG/red_button10.png" Plist="" />
                            <PressedFileData Type="Normal" Path="kenney_ui-pack/PNG/blue_button01.png" Plist="" />
                            <NormalFileData Type="Normal" Path="kenney_ui-pack/PNG/blue_button00.png" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="96.0000" Y="32.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.1000" />
                        <PreSize X="1.0000" Y="0.2000" />
                        <SingleColor A="255" R="150" G="200" B="255" />
                        <FirstColor A="255" R="150" G="200" B="255" />
                        <EndColor A="255" R="255" G="255" B="255" />
                        <ColorVector ScaleY="1.0000" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="96.0000" Y="160.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <SingleColor A="255" R="150" G="150" B="255" />
                    <FirstColor A="255" R="150" G="150" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="item" Visible="False" ActionTag="-293963937" VisibleForFrame="False" Tag="9" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="211.2000" RightMargin="-211.2000" TopMargin="128.0000" BottomMargin="128.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="192.0000" Y="64.0000" />
                    <Children>
                      <AbstractNodeData Name="bg" CanEdit="False" Visible="False" ActionTag="-1828265004" VisibleForFrame="False" Tag="10" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="73.0000" RightMargin="73.0000" TopMargin="9.0000" BottomMargin="9.0000" Scale9Width="46" Scale9Height="46" ctype="ImageViewObjectData">
                        <Size X="46.0000" Y="46.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="96.0000" Y="32.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.2396" Y="0.7188" />
                        <FileData Type="Default" Path="Default/ImageFile.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="but" ActionTag="1806849009" Tag="11" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="38.4000" RightMargin="38.4000" TopMargin="14.0000" BottomMargin="14.0000" TouchEnable="True" FontSize="14" ButtonText="Button" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="16" Scale9Height="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                        <Size X="115.2000" Y="36.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="96.0000" Y="32.0000" />
                        <Scale ScaleX="1.5000" ScaleY="1.5000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.6000" Y="0.5625" />
                        <TextColor A="255" R="65" G="65" B="70" />
                        <DisabledFileData Type="Default" Path="Default/Button_Disable.png" Plist="" />
                        <PressedFileData Type="Default" Path="Default/Button_Press.png" Plist="" />
                        <NormalFileData Type="Default" Path="Default/Button_Normal.png" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="307.2000" Y="160.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="1.6000" Y="0.5000" />
                    <PreSize X="1.0000" Y="0.2000" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="load" ActionTag="2140735074" Tag="131" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="-96.0000" RightMargin="-96.0000" TopMargin="-32.0000" BottomMargin="-32.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" ctype="PanelObjectData">
                    <Size X="384.0000" Y="384.0000" />
                    <Children>
                      <AbstractNodeData Name="bg" CanEdit="False" ActionTag="-1954319420" Tag="132" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="9.6000" RightMargin="9.6000" TopMargin="9.6000" BottomMargin="9.6000" Scale9Enable="True" LeftEage="16" RightEage="16" TopEage="10" BottomEage="16" Scale9OriginX="16" Scale9OriginY="10" Scale9Width="17" Scale9Height="23" ctype="ImageViewObjectData">
                        <Size X="364.8000" Y="364.8000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="192.0000" Y="192.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.9500" Y="0.9500" />
                        <FileData Type="Normal" Path="kenney_ui-pack/PNG/grey_button08.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="list" ActionTag="1829436782" Tag="133" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TopMargin="15.3600" BottomMargin="15.3600" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" ScrollDirectionType="0" DirectionType="Vertical" HorizontalType="Align_HorizontalCenter" ctype="ListViewObjectData">
                        <Size X="384.0000" Y="353.2800" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="192.0000" Y="192.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="1.0000" Y="0.9200" />
                        <SingleColor A="255" R="150" G="150" B="255" />
                        <FirstColor A="255" R="150" G="150" B="255" />
                        <EndColor A="255" R="255" G="255" B="255" />
                        <ColorVector ScaleY="1.0000" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="item" ActionTag="-1490813760" Tag="134" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TopMargin="15.3600" BottomMargin="291.8400" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" ctype="PanelObjectData">
                        <Size X="384.0000" Y="76.8000" />
                        <Children>
                          <AbstractNodeData Name="bg" CanEdit="False" Visible="False" ActionTag="1346911983" VisibleForFrame="False" Tag="135" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="169.0000" RightMargin="169.0000" TopMargin="15.4000" BottomMargin="15.4000" Scale9Width="46" Scale9Height="46" ctype="ImageViewObjectData">
                            <Size X="46.0000" Y="46.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="192.0000" Y="38.4000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.1198" Y="0.5990" />
                            <FileData Type="Default" Path="Default/ImageFile.png" Plist="" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="but" ActionTag="-1314859285" Tag="136" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="15.3600" RightMargin="80.6400" TopMargin="1.9200" BottomMargin="1.9200" TouchEnable="True" FontSize="14" ButtonText="文本描述" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="160" Scale9Height="27" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                            <Size X="288.0000" Y="72.9600" />
                            <AnchorPoint ScaleY="0.5000" />
                            <Position X="15.3600" Y="38.4000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.0400" Y="0.5000" />
                            <PreSize X="0.7500" Y="0.9500" />
                            <TextColor A="255" R="65" G="65" B="70" />
                            <DisabledFileData Type="Normal" Path="kenney_ui-pack/PNG/red_button10.png" Plist="" />
                            <PressedFileData Type="Normal" Path="kenney_ui-pack/PNG/blue_button01.png" Plist="" />
                            <NormalFileData Type="Normal" Path="kenney_ui-pack/PNG/blue_button00.png" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="del" ActionTag="-1579789994" Tag="137" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="324.9600" RightMargin="23.0400" TopMargin="20.4000" BottomMargin="20.4000" TouchEnable="True" FontSize="14" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="6" Scale9Height="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                            <Size X="36.0000" Y="36.0000" />
                            <Children>
                              <AbstractNodeData Name="inco" ActionTag="-1184458847" Tag="138" IconVisible="False" LeftMargin="-9.0000" RightMargin="27.0000" TopMargin="27.0000" BottomMargin="-9.0000" LeftEage="5" RightEage="5" TopEage="5" BottomEage="5" Scale9OriginX="5" Scale9OriginY="5" Scale9Width="8" Scale9Height="8" ctype="ImageViewObjectData">
                                <Size X="18.0000" Y="18.0000" />
                                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                                <Position />
                                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                                <CColor A="255" R="255" G="255" B="255" />
                                <PrePosition />
                                <PreSize X="0.5000" Y="0.5000" />
                                <FileData Type="Normal" Path="kenney_ui-pack/PNG/grey_crossGrey.png" Plist="" />
                              </AbstractNodeData>
                            </Children>
                            <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                            <Position X="360.9600" Y="38.4000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.9400" Y="0.5000" />
                            <PreSize X="0.0938" Y="0.4688" />
                            <TextColor A="255" R="65" G="65" B="70" />
                            <DisabledFileData Type="Normal" Path="kenney_ui-pack/PNG/grey_circle.png" Plist="" />
                            <PressedFileData Type="Normal" Path="kenney_ui-pack/PNG/yellow_boxTick.png" Plist="" />
                            <NormalFileData Type="Normal" Path="kenney_ui-pack/PNG/yellow_circle.png" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                        <Position X="192.0000" Y="368.6400" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.9600" />
                        <PreSize X="1.0000" Y="0.2000" />
                        <SingleColor A="255" R="150" G="200" B="255" />
                        <FirstColor A="255" R="150" G="200" B="255" />
                        <EndColor A="255" R="255" G="255" B="255" />
                        <ColorVector ScaleY="1.0000" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="96.0000" Y="160.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="2.0000" Y="1.2000" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="480.0000" Y="320.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.2000" Y="0.5000" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="480.0000" Y="320.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.0000" Y="1.0000" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>