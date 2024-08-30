import { Editor, JSONContent } from '@tiptap/react'

export type MentionDataItem = {
  id: string
  start: number
}

export const getMentionsWithIndices = (editor: Editor) => {
  const json = editor.getJSON()
  const mentions: MentionDataItem[] = []
  let textLength = 0

  const traverse = (node: JSONContent) => {
    if (node.type === 'text') {
      textLength += node?.text?.length || 0
    } else if (node.type === 'mention') {
      if (node?.attrs?.id) {
        mentions.push({
          id: node.attrs.id,
          start: textLength
        })
        textLength += (node.attrs.label || node.attrs.id).length
      }
    } else if (node.type === 'hardBreak') {
      // Assuming hardBreak is represented as a single character
      textLength += 1
    }

    if (node.content) {
      node.content.forEach(traverse)
    }
  }

  traverse(json)
  return mentions
}
