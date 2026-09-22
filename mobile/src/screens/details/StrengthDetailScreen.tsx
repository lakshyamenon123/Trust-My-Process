import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CheckCircle2, ChevronRight, TrendingUp } from 'lucide-react-native'
import Card from '../../components/Card'
import DetailHeader from '../../components/DetailHeader'
import LevelBar from '../../components/LevelBar'
import IconBadge from '../../components/IconBadge'
import { strengths, careers, findById } from '../../data/studentData'
import { colors, fonts } from '../../theme'
import type { RootStackParamList } from '../../navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'StrengthDetail'>

export default function StrengthDetailScreen({ route, navigation }: Props) {
  const strength = findById(strengths, route.params.id)
  if (!strength) return null

  const relatedCareers = strength.relatedCareers.map((id) => findById(careers, id)).filter(Boolean)

  return (
    <ScrollView style={{ backgroundColor: colors.bgSoft }} contentContainerStyle={styles.scroll}>
      <Card>
        <DetailHeader icon={strength.icon} title={strength.subject} color={colors.accent} />
        {strength.trend === 'up' && (
          <View style={styles.trendRow}>
            <TrendingUp size={14} color={colors.accent} />
            <Text style={styles.trendText}>Trending up this term</Text>
          </View>
        )}
        <LevelBar label="Strength level" value={strength.level} color={colors.accent} />
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.paragraph}>{strength.description}</Text>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>Evidence</Text>
        <View style={styles.list}>
          {strength.evidence.map((item) => (
            <View key={item} style={styles.listRow}>
              <CheckCircle2 size={16} color={colors.accent} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>
      </Card>

      {relatedCareers.length > 0 && (
        <Card>
          <Text style={styles.sectionTitle}>Related careers</Text>
          <View style={styles.list}>
            {relatedCareers.map((career) => (
              <Pressable
                key={career!.id}
                style={styles.careerRow}
                onPress={() => navigation.navigate('CareerDetail', { id: career!.id })}
              >
                <IconBadge icon={career!.icon} size={36} color={colors.primaryDeep} />
                <Text style={styles.careerTitle}>{career!.title}</Text>
                <ChevronRight size={18} color={colors.muted} />
              </Pressable>
            ))}
          </View>
        </Card>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: { padding: 16, gap: 12 },
  sectionTitle: { fontFamily: fonts.displaySemibold, fontSize: 14, color: colors.ink, marginBottom: 10 },
  paragraph: { fontFamily: fonts.body, fontSize: 13.5, color: colors.muted, lineHeight: 20 },
  trendRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10 },
  trendText: { fontFamily: fonts.bodyMedium, fontSize: 12.5, color: colors.accent },
  list: { gap: 10 },
  listRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  listText: { flex: 1, fontFamily: fonts.body, fontSize: 13.5, color: colors.ink, lineHeight: 19 },
  careerRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  careerTitle: { flex: 1, fontFamily: fonts.bodyMedium, fontSize: 13.5, color: colors.ink },
})
