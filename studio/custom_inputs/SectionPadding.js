import React from 'react'

import { FormBuilderInput } from '@sanity/form-builder/lib/FormBuilderInput'
import Fieldset from 'part:@sanity/components/fieldsets/default'
import { setIfMissing } from '@sanity/form-builder/PatchEvent'
import { Flex } from '@sanity/ui'

export const SectioPadding = React.forwardRef((props, ref) => {
  const {
    compareValue,
    focusPath,
    markers,
    onBlur,
    onChange,
    onFocus,
    presence,
    type,
    value,
    level
  } = props

  const handleFieldChange = React.useCallback(
    (field, fieldPatchEvent) => {
      onChange(fieldPatchEvent.prefixAll(field.name).prepend(setIfMissing({ _type: type.name })))
    },
    [onChange]
  )

  const fieldNames = type.fields.map(f => f.name)

  const childPresence =
    presence.length === 0
      ? presence
      : presence.filter((item) => fieldNames.includes(item.path[0]))

  const childMarkers =
    markers.length === 0
      ? markers
      : markers.filter((item) => fieldNames.includes(item.path[0]))

  return (
    <Fieldset
      legend={type.title}
      description={type.description}
      markers={childMarkers}
      presence={childPresence}
    >
      <Flex wrap={'wrap'}>
        {type.fields.map((field, i) => (
          <FormBuilderInput
            flex={1}
            padding={1}
            level={level + 1}
            ref={i === 0 ? ref : null}
            key={field.name}
            type={field.type}
            value={value && value[field.name]}
            onChange={(patchEvent) => handleFieldChange(field, patchEvent)}
            path={[field.name]}
            markers={markers}
            focusPath={focusPath}
            readOnly={field.type.readOnly}
            presence={presence}
            onFocus={onFocus}
            onBlur={onBlur}
            compareValue={compareValue}
          />
        ))}
      </Flex>
    </Fieldset>
  )
}
)

export default SectioPadding
