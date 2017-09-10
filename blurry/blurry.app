<aura:application >
  <aura:attribute name="FilesList" type="Object"/>
  <aura:attribute name="image" type="string"/>
  <img src="{!v.image}"/>
  <lightning:input
    type="file"
    label="Attachment"
    variant="label-hidden"
    name="file"
    files="{!v.FilesList}"
    multiple="true"
    accept="image/jpg, image/png"
    onchange="{! c.handleFilesChange }"/>
</aura:application>